//Employee collection
const express = require("express");
const jwt = require("jsonwebtoken");

const recordRoutes = express.Router();

const dbo = require("../../db/conn");

const ObjectId = require("mongodb").ObjectId;

//Select all records
recordRoutes.route("/").get(function (req, res) {
  let db_connect = dbo.getDb("Bank");
  db_connect
    .collection("Employee")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

//Select one record
recordRoutes.route("/:id").get(function (req, res) {
  let db_connect = dbo.getDb("Bank");
  let myquery = { _id: ObjectId(req.params.id) };
  db_connect
    .collection("Employee")
    .findOne(myquery, function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

//add record
recordRoutes.route("/add").post(function (req, response) {
  let db_connect = dbo.getDb("Bank");
  let myobj = {
    emp_name: req.body.emp_name,
    emp_email: req.body.emp_email,
    emp_photo: req.body.emp_photo,
    emp_address: req.body.emp_address,
    emp_password: req.body.emp_password,
    branch_name: req.body.branch_name,
    bank_name: req.body.bank_name,
  };
  db_connect.collection("Employee").insertOne(myobj, function (err, res) {
    if (err) throw err;
    response.json(res);
  });
});

//update record by id
recordRoutes.route("/update/:id").post(function (req, response) {
  let db_connect = dbo.getDb("Bank");
  let myquery = { _id: ObjectId(req.params.id) };
  let newvalues = {
    $set: {
      emp_name: req.body.emp_name,
      emp_email: req.body.emp_email,
      emp_photo: req.body.emp_photo,
      emp_address: req.body.emp_address,
      emp_password: req.body.emp_password,
      branch_name: req.body.branch_name,
      bank_name: req.body.bank_name,
    },
  };
  db_connect
    .collection("Employee")
    .updateOne(myquery, newvalues, function (err, res) {
      if (err) throw err;
      console.log("1 document updated");
      response.json(res);
    });
});

//delete a record by id
recordRoutes.route("/delete/:id").delete((req, response) => {
  let db_connect = dbo.getDb("Bank");
  let myquery = { _id: ObjectId(req.params.id) };
  db_connect.collection("Employee").deleteOne(myquery, function (err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
    response.json(obj);
  });
});

//login function
recordRoutes.route("/login").post(function (req, response) {
  let db_connect = dbo.getDb("Bank");
  let email = req.body.emp_email;
  let password = req.body.emp_password;

  db_connect.collection("Employee").findOne({ emp_email: email, emp_password: password }, function (err, result) {
    if (err) throw err;
    if (result) {
      const token = jwt.sign(
        {
          id: result._id,
          email: result.emp_email,
          password: result.emp_password,
        },
        "secretkey"
      );

      return response.json({ user: true, msg: "Login Success", status: "ok", token: token });
    } else {
      return response.json({ user: false, msg: "Login Failed", status: "error" });
    }
  });
});

module.exports = recordRoutes;
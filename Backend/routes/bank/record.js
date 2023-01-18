//Bank collection
const express = require("express");
 
const recordRoutes = express.Router();
 
const dbo = require("../../db/conn");
 
const ObjectId = require("mongodb").ObjectId;
 
//Select all records
recordRoutes.route("/").get(function (req, res) {
 let db_connect = dbo.getDb("Bank");
 db_connect
   .collection("Bank")
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
   .collection("Bank")
   .findOne(myquery, function (err, result) {
     if (err) throw err;
     res.json(result);
   });
});
 
//add record
recordRoutes.route("/add").post(function (req, response) {
 let db_connect = dbo.getDb("Bank");
 let myobj = {
   bank_name: req.body.bank_name,
 };
 db_connect.collection("Bank").insertOne(myobj, function (err, res) {
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
    bank_name: req.body.bank_name,
   },
 };
 db_connect
   .collection("Bank")
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
 db_connect.collection("Bank").deleteOne(myquery, function (err, obj) {
   if (err) throw err;
   console.log("1 document deleted");
   response.json(obj);
 });
});
 
module.exports = recordRoutes;
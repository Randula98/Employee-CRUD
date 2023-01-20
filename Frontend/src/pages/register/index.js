/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from "react";
import { storage } from "../../firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
import Swal from 'sweetalert2'

import { registerImage } from "../../asserts";

export default function Register() {

  const [emp_name, setEmp_name] = useState("");
  const [emp_email, setEmp_email] = useState("");
  const [emp_photo, setEmp_photo] = useState("");
  const [emp_address, setEmp_address] = useState("");
  const [emp_password, setEmp_password] = useState("");
  //const [password_confirmation, setPassword_confirmation] = useState("");
  const [branch_name, setBranch_name] = useState("");
  const [bank_name, setBank_name] = useState("");

  async function onSubmit(e) {
    e.preventDefault();

      const storageRef = ref(storage, `employees/${Image.name + v4()}`);

      await uploadBytes(storageRef, emp_photo)
        .then(() => {
          console.log("uploaded");
        })
        .catch((err) => {
          console.log(err);
        });

      await getDownloadURL(storageRef)
        .then(async (url) => {
          setEmp_photo(url);

          console.log(url);

          const newEmployee = {
            emp_name,
            emp_email,
            emp_photo: url,
            emp_address,
            emp_password,
            branch_name,
            bank_name,
          };

          const response = await fetch(`http://localhost:5000/employee/add`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newEmployee),
          }).catch((err) => {
            window.alert(err);
            // return;
          });
          const content = await response.json();
          console.log(content);


          if (content.acknowledged === true) {
            Swal.fire({
              icon: 'success',
              title: 'Successful...',
              text: 'Login Successfully !!',
              footer: '<a href="/login">Go to Login</a>'
            }).then((result) => {
              if (result.isConfirmed) {
                window.location.href = "/login";
              }
            })
          }
          else if (content.user === false) {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: content.msg,
            })
          }
        })
        .catch((err) => {
          console.log(err);
        });
  }


  return (
    <>
      <section className="h-screen w-4/5">
        <div className="px-6 h-full text-gray-800">
          <div
            className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6"
          >
            <div
              className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0"
            >
              <img
                src={registerImage}
                className="w-full"
                alt="Sample image"
              />
            </div>
            <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
              <h2 class="text-5xl font-normal leading-normal mt-0 mb-2 text-blue-800 mb-5">
                Register
              </h2>

              <form onSubmit={onSubmit} autoComplete="off">
                <div className="mb-6">
                  <input
                    type="text"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="exampleFormControlInput2"
                    placeholder="Name"
                    onChange={(e) => { setEmp_name(e.target.value) }}
                    required
                  />
                </div>

                <div className="mb-6">
                  <input
                    type="text"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="exampleFormControlInput2"
                    placeholder="Email address"
                    onChange={(e) => { setEmp_email(e.target.value) }}
                    required
                  />
                </div>

                <div className="mb-6">
                  <input
                    type="text"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="exampleFormControlInput2"
                    placeholder="Address"
                    onChange={(e) => { setEmp_address(e.target.value) }}
                    required
                  />
                </div>

                <div class="mb-6">
                  <input
                    type="password"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="exampleFormControlInput2"
                    placeholder="Password"
                    onChange={(e) => { setEmp_password(e.target.value) }}
                    required
                  />
                </div>

                {/* <div class="mb-6">
                  <input
                    type="password"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="exampleFormControlInput2"
                    placeholder="Confirm Password"
                    onChange={(e) => { setPassword_confirmation(e.target.value) }}
                  />
                </div> */}

                <div className="grid gap-3 md:grid-cols-2">
                  <div class="mb-6">
                    <label for="formFile" class="form-label inline-block mb-2 text-gray-700">Select a Bank</label>
                    <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" onChange={(e) => { setBank_name(e.target.value) }}>
                      <option selected>Select a Bank</option>
                      <option value="Commercial Bank">Commercial Bank</option>
                      <option value="People's Bank">People's Bank</option>
                      <option value="Bank of Ceylon">Bank of Ceylon</option>
                      <option value="Sampath Bank">Sampath Bank</option>
                      <option value="Nations Trust">Nations Trust</option>
                    </select>
                  </div>

                  <div class="mb-6">
                    <label for="formFile" class="form-label inline-block mb-2 text-gray-700">Select a Branch</label>
                    <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" onChange={(e) => { setBranch_name(e.target.value) }} >
                      <option selected>Select a Branch</option>
                      <option value="Kandy">Kandy</option>
                      <option value="Colombo">Colombo</option>
                      <option value="Kegalle">Kegalle</option>
                      <option value="Galle">Galle</option>
                      <option value="Malabe">Malabe</option>
                    </select>
                  </div>
                </div>

                <div class="mb-6">
                  <label for="formFile" class="form-label inline-block mb-2 text-gray-700">Upload Profile Picture</label>
                  <input class="form-control
                                    block
                                    w-full
                                    px-3
                                    py-1.5
                                    text-base
                                    font-normal
                                    text-gray-700
                                    bg-white bg-clip-padding
                                    border border-solid border-gray-300
                                    rounded
                                    transition
                                    ease-in-out
                                    m-0
                                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="file" id="formFile"
                    onChange={(e) => {
                      setEmp_photo(e.target.files[0]);
                    }} 
                    required/>
                </div>

                <div className="text-center lg:text-left">
                  <button
                    type="submit"
                    className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
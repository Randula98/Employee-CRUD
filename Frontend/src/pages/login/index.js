/* eslint-disable jsx-a11y/img-redundant-alt */
import { React, useState } from 'react'
import Swal from 'sweetalert2'

import "./login.css"
import { loginImage } from "../../asserts";

export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  

  function test() {
    alert("Login Successfully !!");
  }
  async function login(event) {
    event.preventDefault();
    const response = await fetch(`http://localhost:5000/employee/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const content = await response.json();
    console.log(content);

    if (content.user === true) {
      sessionStorage.setItem("authToken", content.token);
      Swal.fire({
        icon: 'success',
        title: 'Successful...',
        text: 'Login Successfully !!',
        footer: '<a href="/dash">Go to Dashboard</a>'
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.href = "/dash";
        }
      })
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Check Your Email & Passoword Again!!!',
      })
    }
  }

  return (
    <>
      <section className="h-screen w-4/5 h-1/2">
        <div className="px-6 h-full text-gray-800">
          <div
            className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6"
          >
            <div
              className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0"
            >
              <img
                src={loginImage}
                className="w-full"
                alt="Sample image"
              />
            </div>
            <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
              <h2 class="text-5xl font-normal leading-normal mt-0 mb-2 text-blue-800 mb-5">
                Login
              </h2>

              <form onSubmit={login} autoComplete="off">
                <div className="mb-6">
                  <input
                    type="email"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="exampleFormControlInput2"
                    placeholder="Email address"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div class="mb-6">
                  <input
                    type="password"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="exampleFormControlInput2"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>

                <div className="text-center lg:text-left">
                  <button
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                  >
                    Sign in
                  </button>
                  <p className="text-sm font-semibold mt-2 pt-1 mb-0">
                    Don't have an account?
                    <a
                      href="/register"
                      className="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
                    > Register</a
                    >
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
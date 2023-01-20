import React from 'react'
import './home.css'

export default function Home() {

    const login = "Login to the System";
    const register = "Register to the System";
    const loginDetails = "If you are an existing user, please login to the system.";
    const registerDetails = "If you are a new user, please register to the system.";
    const loginImage = "https://firebasestorage.googleapis.com/v0/b/employee-crud-39d26.appspot.com/o/asserts%2F4957136.jpg?alt=media&token=f160a402-4514-45fc-9438-2f89c8f2d4a1";
    const registerImage = "https://firebasestorage.googleapis.com/v0/b/employee-crud-39d26.appspot.com/o/asserts%2F6368592.jpg?alt=media&token=cb81a178-c667-4492-b93a-662ea7ce3cea";

    return (
        <>
            <div className='homecontainer'>
                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                    <a href="/login">
                        <img className="rounded-t-lg" src={loginImage} alt="" />
                    </a>
                    <div className="p-5">
                        <a href="/login">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{login}</h5>
                        </a>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{loginDetails}</p>
                        <a href="/login" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Login
                            <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </a>
                    </div>
                </div>

                <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                    <a href="/register">
                        <img className="rounded-t-lg" src={registerImage} alt="" />
                    </a>
                    <div class="p-5">
                        <a href="/register">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{register}</h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{registerDetails}</p>
                        <a href="/register" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Register
                            <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}
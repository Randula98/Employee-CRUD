import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import NavBar from "../components/navbar";

import {
    Home,
    Login,
    Register
} from "../pages";

function App() {
    return (
        <>
            <Router>
                <NavBar />
                    <Routes>
                        <Route path="/" element={<Home />} /> 
                        <Route path="/login" element={<Login />} />  
                        <Route path="/register" element={<Register />} />
                    </Routes>
                
            </Router>
        </>
    )
}

export default App;
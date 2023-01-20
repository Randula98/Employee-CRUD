import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import {
    NavBar,
    Footer
} from "../components";

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
                    
                <Footer/>
            </Router>
        </>
    )
}

export default App;
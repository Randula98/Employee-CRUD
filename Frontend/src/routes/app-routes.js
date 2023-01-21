import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import {
    NavBar,
    Footer
} from "../components";

import {
    Home,
    Login,
    Register,
    Dash,
    Filter
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
                        <Route path="/dash" element={<Dash />} />
                        <Route path="/filter/:bank/:branch" element={<Filter />} />
                    </Routes>
                    
                <Footer/>
            </Router>
        </>
    )
}

export default App;
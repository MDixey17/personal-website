import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Import the pages
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Esports from "./pages/Esports";
import Developer from "./pages/Developer";
// For off-setting the default padding and margins
import './App.css';

function App() {
    // Add in the elements after the path
    return (
        <BrowserRouter>
            <Navbar></Navbar>
            <Routes>
                <Route exact path='/' element={<Home></Home>}></Route>
                <Route path='/developer' element={<Developer></Developer>}></Route>
                <Route path='/esports' element={<Esports></Esports>}></Route>
                <Route path='/contact' element={<Contact></Contact>}></Route>
            </Routes>
            <Footer></Footer>
        </BrowserRouter>
    )
}

export default App;
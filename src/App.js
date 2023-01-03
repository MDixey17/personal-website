import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
// Import the pages
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Esports from "./pages/Esports";
import Developer from "./pages/Developer";
// For off-setting the default padding and margins
import './App.css';
import { HeroText } from "./style/Hero.style";
import { ContentHeader, ContentItalics, ContentText } from "./style/Content.style";
import { FooterHeader } from "./style/Footer.style";
import { ContactForm, ContactInput, ContactSubmitButton, ContactTextArea, ContactWrapper } from "./style/Contact.style";

const GlobalStyle = createGlobalStyle`
    ${HeroText}, ${ContentHeader}, ${FooterHeader} {
        font-family: 'Orbitron', sans-serif;
    }

    ${HeroText} {
        p {
            font-family: 'Space Mono', sans-serif;
        }
    }

    ${ContentText}, ${ContentItalics} {
        font-family: 'Tero Sans', sans-serif;
    }

    ${ContactWrapper} {
        font-family: 'Tero Sans', sans-serif;
    }

    ${ContactForm} {
        font-family: 'Tero Sans', sans-serif;
        h2 {
            font-family: 'Orbitron', sans-serif;
        }
        ${ContactInput}, ${ContactTextArea} {
            font-family: 'Tero Sans', sans-serif;
        }
    }

    ${ContactSubmitButton}, ${ContactInput}, ${ContactTextArea} {
        ::placeholder {
            font-family: 'Tero Sans', sans-serif;
        }
    }
`;

function App() {
    // Add in the elements after the path
    return (
        <>
            <BrowserRouter basename="/personal-website">
                <GlobalStyle/>
                <Navbar></Navbar>
                <Routes>
                    <Route exact path='/' element={<Home></Home>}></Route>
                    <Route path='/developer' element={<Developer></Developer>}></Route>
                    <Route path='/esports' element={<Esports></Esports>}></Route>
                    <Route path='/contact' element={<Contact></Contact>}></Route>
                    <Route path='*' element={<Navigate to="/"></Navigate>}></Route>
                </Routes>
                <Footer></Footer>
            </BrowserRouter>
        </>
    )
}

export default App;
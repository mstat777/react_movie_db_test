import { Routes, Route } from "react-router-dom";
import React from "react";
import Header from "./Components/Containers/Header/Index";
import Footer from "./Components/Containers/Footer/Index";
import Home from "./Components/Pages/Home/Index";
import Search from "./Components/Pages/Search/Index";

function App() {

    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="search" element={<Search />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
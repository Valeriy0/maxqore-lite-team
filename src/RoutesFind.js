import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MainPage } from "./pages/MainPage";

export const RoutesFind = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<div><MainPage /></div>} />
                {/* <Route path="/myNft" element={<div><MyNft /></div>} /> */}
            </Routes>
        </Router>
    )
}
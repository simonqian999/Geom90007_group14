import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Report from "./components/report/Report";
import Introduction from "./components/dashboard/Introduction";
import Discover from "./components/dashboard/Discover";
import Hotel from "./components/dashboard/Hotel";
import Transport from "./components/dashboard/Transport";

function App() {
    return (
        <React.Fragment>
        
        <main>
            <Routes>
                <Route path="/" element={<Introduction />} />
                <Route path="/attractions" element={<Discover />} />
                <Route path="/hotel" element={<Hotel />} />
                <Route path="/transportation" element={<Transport />} />
                <Route path="/report" element={<Report />} />
            </Routes>
        </main>
        </React.Fragment>
    );
}

export default App;

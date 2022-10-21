import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import Report from "./components/report/Report";

function App() {
    return (
        <React.Fragment>
        
        <main>
            <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/report" element={<Report />} />
            </Routes>
        </main>
        </React.Fragment>
    );
}

export default App;

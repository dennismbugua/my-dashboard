import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard";
import Analytics from "./Analytics";
import Reports from "./Reports";
import "./App.css";
import Home from "./Home";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="container-fluid">
          <div className="row">
            <Sidebar />
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/dashboard" element={<Dashboard />} />
              <Route exact path="/analytics" element={<Analytics />} />
              <Route exact path="/reports" element={<Reports />} />
              {/* Add more routes for additional dashboard pages */}
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

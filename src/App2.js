// src/App2.js
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Navbar from "./Navbar2";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";
import { Blogs } from "./Blogs";
import { AdminDashboard } from "./AdminDashboard";
import Particles1 from "./Particles1";
import Skills from "./Skills";
import Skills2 from "./Skills2";
import Projects from "./Projects";
import WorkExperience from "./WorkExperience";
import Education from "./Education";
import ContactInfo from "./ContactInfo";
import "./styles.css";

const App2 = () => {
  const [auth, setAuth] = useState(false);

  return (
    <Router>
      <div className="container mx-auto p-4 text-white">
        <Navbar />

        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login setAuth={setAuth} />} />
          <Route
            path="/admin"
            element={
              <PrivateRoute auth={auth}>
                <AdminDashboard />
              </PrivateRoute>
            }
          />
          <Route path="/blogs" element={<Blogs />} />
        </Routes>

        <Skills />
        <Skills2 />
        <Projects />
        <WorkExperience />
        <Education />
        <ContactInfo />

        <Particles1 />
      </div>
    </Router>
  );
};

export default App2;

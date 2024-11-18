"use client";
import About from "@/components/About";
import Aside from "@/components/Aside";
import Contact from "@/components/Contact";
import Portfolio from "@/components/Portfolio";
import Resume from "@/components/Resume";
import { motion } from "framer-motion";
import { FaSun, FaMoon } from "react-icons/fa";
import React, { useState } from "react";

const PersonalPortfolio = () => {
  const [activeRoute, setActiveRoute] = useState("about");
  const [lightMode, setLightMode] = useState(false);

  const DarkMode = () => {
    document.querySelector("body").setAttribute("data-theme", "dark");
  };
  const LightMode = () => {
    document.querySelector("body").setAttribute("data-theme", "light");
  };
  const toggleTheme = () => {
    const newLightMode = !lightMode; // Get the new mode
    setLightMode(newLightMode); // Update the state

    // Set the body attribute based on the new state
    if (newLightMode) {
      LightMode(); // If newLightMode is true, set light mode
    } else {
      DarkMode(); // Otherwise, set dark mode
    }
  };

  return (
    <>
      <main>
     
        <Aside />
        <div className="main-content mt-[100px]">
        <span class="red-circle"></span>
        <span class="purple-circle"></span>
          <nav className="navbar">
            <ul className="navbar-list">
              <li className="navbar-item" onClick={() => setActiveRoute("about")}>
                <button className={`navbar-link ${activeRoute === "about" ? "active" : ""}`}>
                  About
                </button>
              </li>

              <li className="navbar-item" onClick={() => setActiveRoute("resume")}>
                <button className={`navbar-link ${activeRoute === "resume" ? "active" : ""}`}>
                  Resume
                </button>
              </li>

              <li className="navbar-item" onClick={() => setActiveRoute("portfolio")}>
                <button className={`navbar-link ${activeRoute === "portfolio" ? "active" : ""}`}>
                  Portfolio
                </button>
              </li>

              <li className="navbar-item" onClick={() => setActiveRoute("blog")}>
                <button className={`navbar-link ${activeRoute === "blog" ? "active" : ""}`}>
                  Blog
                </button>
              </li>

              <li className="navbar-item" onClick={() => setActiveRoute("contact")}>
                <button className={`navbar-link ${activeRoute === "contact" ? "active" : ""}`}>
                  Contact
                </button>
              </li>
            </ul>
            <motion.button
              className="p-2 rounded-full focus:outline-none transition duration-300"
              onClick={toggleTheme}
              whileTap={{ rotate: 360 }}
            >
              {lightMode ? <FaMoon className="moon" /> : <FaSun className="sun" />}
            </motion.button>
          </nav>
          {activeRoute === "about" ? <About /> : ""}
          {activeRoute === "resume" ? <Resume /> : ""}
          {activeRoute === "portfolio" ? <Portfolio /> : ""}
          {activeRoute === "contact" ? <Contact /> : ""}
        </div>
      </main>
    </>
  );
};

export default PersonalPortfolio;

import React from "react";
import Navbar from "./Navbar";
import GithubCalender from "./GithubCalender";
import About from "./About";

import Projects from "./Projects";
import GithubStats from "./GithubStats";
import Skills from "./Skills"
import Contact from "./Contact";

const Main = () => {
  return (
    <div id="home">
      <Navbar />
      <About />
      <Skills/>
     
      <Projects />
      <GithubCalender />
      <GithubStats />
      <Contact/>
    </div>
  );
};

export default Main;

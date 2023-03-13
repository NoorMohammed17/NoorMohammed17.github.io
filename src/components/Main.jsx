import React from "react";
import Navbar from "./Navbar";
import GithubCalender from "./GithubCalender";
import About from "./About";
//import {AboutMe} from "./AboutMe";
import Projects from "./Projects";
import GithubStats from "./GithubStats";

const Main = () => {
  return (
    <div id="home">
      <Navbar />
      <About />
      {/* <AboutMe/> */}
      <Projects />
      <GithubCalender />
      <GithubStats />
    </div>
  );
};

export default Main;

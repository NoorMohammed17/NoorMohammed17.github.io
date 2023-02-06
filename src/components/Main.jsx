import React from 'react'
//import Navbar from './Navbar'
//import GithubCalender from './GithubCalender'
import {AboutMe} from "./AboutMe";
import Projects from "./Projects"


const Main = () => {
  return (
    <div  id="home">
        {/* <Navbar/> */}
        <AboutMe/>
        <Projects/>

        {/* <GithubCalender/> */}
      
    </div>
  )
}

export default Main
import React from 'react'
import GitHubCalendar from 'react-github-calendar'


const GithubCalender = () => {
  return (
    <div  id="github-streak-stats" style={{width:"100%",border:"1px solid red"}}>
      <GitHubCalendar username="NoorMohammed17" backgroundColor={"green"}  />
      </div>
    // <div>
    //   Github
    // </div>

  )
}

export default GithubCalender
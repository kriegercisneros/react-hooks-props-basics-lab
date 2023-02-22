import React from "react";
import Links from "./Links";

// import user from "../data/user"
function About({ bio, links }) {

  return (
    <div id="about">
      <h2>About Me</h2>
      {bio ? <p>{bio}</p> : null}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github={links.github} linkedin={links.linkedin} />
    </div>
  );
}
//for a friend
export default About;

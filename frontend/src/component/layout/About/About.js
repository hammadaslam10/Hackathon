import React from "react";
import "./About.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GithubIcon from "@material-ui/icons/GitHub";

const About = () => {
  const visitLinkedIn = () => {
    window.location = "#";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Me</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="Profile.png"
              alt="Founder"
            />
            <Typography>Hammad Aslam</Typography>
            <Button onClick={visitLinkedIn} color="primary" target="blank">
              Visit LinkedIn Profile
            </Button>
            <span>A web app to polish my coding speed and skill </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">My Accounts</Typography>
            <a href="#" target="blank">
              <LinkedInIcon className="linkedinSvgIcon" />
            </a>

            <a href="#" target="blank">
              <GithubIcon className="githubSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

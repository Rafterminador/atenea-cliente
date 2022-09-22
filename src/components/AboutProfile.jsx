import React from "react";
import GithubImage from "../assets/images/img-about-github.svg";

const AboutProfile = (props) => {
  return (
    <div className="flex flex-col items-center gap-2 md:gap-6">
      <a href={props.githublink} rel="noreferrer" target="_blank" className="flex-grow-0 card">
        <img className="img-top" src={props.img} alt="profile_image" />
        <img className="hidden md:block img-back" src={GithubImage} alt="github" />
      </a>
      <div className="flex flex-col items-center order-1 self-stretch flex-grow-0 p-0">
        <h1 className="nrm-text text-center titlesemibold md:text-[1.777rem] md:leading-[43px]">
          {props.name}
        </h1>
        <p className="sml-text text-center md:text-[21.33px] md:leading-[29px]">
          {props.rol}
        </p>
      </div>
    </div>
  );
};

AboutProfile.propTypes = {};

export default AboutProfile;

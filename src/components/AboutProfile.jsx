import React from "react";
import GithubImage from "../assets/images/img-about-github.svg";

const AboutProfile = (props) => {
  console.log(props.ruta);

  return (
    <div className="flex flex-col items-center gap-2 md:gap-6">
      <div className="flex-grow-0 card">
        <img className="img-top" src={props.img} alt="profile_image" />
        <img className="img-back" src={GithubImage} alt="github" />
      </div>
      <div className="flex flex-col items-center order-1 self-stretch flex-grow-0 p-0">
        <h1 className="text-base titlesemibold md:text-[1.777rem] md:leading-[43px]">
          {props.nombre}
        </h1>
        <p className="smtxt text-center md:text-[21.33px] md:leading-[29px]">
          {props.rol}
        </p>
      </div>
    </div>
  );
};

AboutProfile.propTypes = {};

export default AboutProfile;

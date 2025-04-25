import React, { Component } from "react";
import "./Skills.css";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import { skills } from "../../portfolio";
import { Fade } from "react-reveal";
import DataScienceImg from "./DataScienceImg";
import FullStackImg from "./FullStackImg";
import CloudInfraImg from "./CloudInfraImg";
import DesignImg from "./DesignImg";
import { LazyLoadImage } from "react-lazy-load-image-component";

function GetSkillSvg(props) {
  if (props.fileName === "DataScienceImg")
    return <DataScienceImg theme={props.theme} />;
  else if (props.fileName === "FullStackImg")
    return (
      <LazyLoadImage
        alt="Profile Picture"
        style={{
          width: "70%",
          borderRadius: "5%",
          display: "block",
          margin: "0 auto",
        }}
        src={require("../../assets/images/DSC_0533_cropped.jpg")}
      />
    );
  // return <FullStackImg theme={props.theme} />;
  else if (props.fileName === "CloudInfraImg")
    return (
      <LazyLoadImage
        alt="Profile Picture"
        style={{
          width: "70%",
          borderRadius: "5%",
          display: "block",
          margin: "0 auto",
        }}
        src={require("../../assets/images/animated-psychotherapy8_HQ.jpg")}
      />
    );
  // return <CloudInfraImg theme={props.theme} />;
  return <DesignImg theme={props.theme} />;
}

class SkillSection extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div>
        <div className="skills-summary-div">
          <Fade left duration={2000}>
            <div className="skills-image-div">
              <GetSkillSvg fileName={skills.data[0].fileName} theme={theme} />
            </div>
          </Fade>

          <div className="skills-text-div">
            <Fade right duration={1000}>
              <h1 className="skills-heading" style={{ color: "#c86e42" }}>
                {skills.data[0].title}
              </h1>
            </Fade>
            <Fade right duration={1500}>
              <SoftwareSkill logos={skills.data[0].softwareSkills} />
            </Fade>
            <Fade right duration={2000}>
              <div>
                {skills.data[0].skills.map((skillSentence) => {
                  return (
                    <p
                      className="subTitle skills-text"
                      style={{ color: "#f5f5f5" }}
                    >
                      {skillSentence}
                    </p>
                  );
                })}
              </div>
            </Fade>
          </div>
        </div>
        <div className="skills-resume-div">
          <Fade left duration={2000}>
            <div className="skills-image-div">
              <GetSkillSvg fileName={skills.data[1].fileName} theme={theme} />
            </div>
          </Fade>

          <div className="skills-resume-text-div">
            <Fade right duration={1000}>
              <h1 className="skills-heading" style={{ color: "#c86e42" }}>
                {skills.data[1].title}
              </h1>
            </Fade>
            <Fade right duration={1500}>
              <SoftwareSkill logos={skills.data[1].softwareSkills} />
            </Fade>
            <Fade right duration={2000}>
              <div>
                {skills.data[1].skills.map((skillSentence) => {
                  return (
                    <p
                      className="subTitle skills-text"
                      style={{ color: "#000000" }}
                    >
                      {skillSentence}
                    </p>
                  );
                })}
              </div>
            </Fade>
          </div>
        </div>
      </div>
    );
  }
}

export default SkillSection;

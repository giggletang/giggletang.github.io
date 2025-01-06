import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import Educations from "../../containers/education/Educations";
import Certifications from "../../containers/certifications/Certifications";
// import CompetitiveSites from "../../components/competitiveSites/CompetitiveSites";
import EducationImg from "./EducationImg";
// import { competitiveSites } from "../../portfolio";
import { certifications } from "../../portfolio";
import "./EducationComponent.css";
import { Fade } from "react-reveal";

class Education extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="education-main">
        <Header theme={this.props.theme} />
        <div className="basic-education">
          <Fade bottom duration={2000} distance="40px">
            <div className="heading-div">
              <div className="heading-img-div">
                {/* <img
									src={require("../../assets/images/education.svg")}
									alt=""
								/> */}
                <EducationImg theme={theme} />
              </div>
              <div className="heading-text-div">
                <h1 className="heading-text" style={{ color: theme.text }}>
                  Education
                </h1>
                <h3 className="heading-sub-text" style={{ color: theme.text }}>
               I hold two master’s degrees, one in Computer Science and the other in Law,
                reflecting my interdisciplinary approach to problem-solving and innovation.
                Additionally, I have earned certifications in Full-Stack Development, 
                Cybersecurity, Artificial Intelligence, and Data Analytics,
                further enhancing my technical expertise and enabling me to tackle complex challenges
                at the intersection of technology, law, and data.
                </h3>
                {/* <CompetitiveSites logos={competitiveSites.competitiveSites} /> */}
              </div>
            </div>
          </Fade>
          <Educations theme={this.props.theme} />
          {certifications.certifications.length > 0 ? (
            <Certifications theme={this.props.theme} />
          ) : null}
        </div>
        <Footer theme={this.props.theme} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Education;

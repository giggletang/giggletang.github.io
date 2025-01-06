import React, { Component } from "react";
import ExperienceCard from "../../components/experienceCard/ExperienceCard.js";
import "./ExperienceAccordion.css";
import { Accordion, Panel } from "baseui/accordion";

// class ExperienceAccordion extends Component {
//   render() {
//     const theme = this.props.theme;
//     return (
//       <div className="experience-accord">
//         <Accordion>
//           {this.props.sections.map((section) => {
//             return (
//               <Panel
//                 className="accord-panel"
//                 title={section["title"]}
//                 key={section["title"]}
//                 overrides={{
//                   Header: {
//                     style: () => ({
//                       backgroundColor: `${theme.body}`,
//                       border: `1px solid`,
//                       borderRadius: `5px`,
//                       borderColor: `${theme.headerColor}`,
//                       marginBottom: `3px`,
//                       fontFamily: "Google Sans Regular",
//                       color: `${theme.text}`,
//                       ":hover": {
//                         color: `${theme.secondaryText}`,
//                       },
//                     }),
//                   },
//                   Content: {
//                     style: () => ({
//                       backgroundColor: `${theme.body}`,
//                     }),
//                   },
//                 }}
//               >
// {section["experiences"].map((experience,index) => {
//                   return (
//                     <ExperienceCard index={index} totalCards={section["experiences"].length} experience={experience} theme={theme} />
//                   );
//                 })}
//               </Panel>
//             );
//           })}
//         </Accordion>
//       </div>
//     );
//   }
// }

// export default ExperienceAccordion;


class ExperienceAccordion extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="experience-accord">
        {this.props.sections.map((section) => {
          return (
            <div
              className="accord-panel"
              key={section["title"]}
              style={{
                backgroundColor: `${theme.body}`,
                border: `1px solid`,
                borderRadius: `5px`,
                borderColor: `${theme.headerColor}`,
                marginBottom: `3px`,
                fontFamily: "Google Sans Regular",
                color: `${theme.text}`,
                width: '80%',
                margin: '0 auto',
              }}
            >
              <div
                className="panel-header"
                style={{
                  color: `${theme.text}`,
                  backgroundColor: `${theme.headerColor}`,
                  padding: '10px',
                }}
              >
                {section["title"]}
              </div>
              <div className="panel-content">
                {section["experiences"].map((experience, index) => {
                  return (
                    <ExperienceCard
                      index={index}
                      totalCards={section["experiences"].length}
                      experience={experience}
                      theme={theme}
                    />
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default ExperienceAccordion;

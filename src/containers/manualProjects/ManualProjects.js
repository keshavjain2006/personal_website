import React, { useContext } from "react";
import "../workExperience/WorkExperience.scss";
import ExperienceCard from "../../components/experienceCard/ExperienceCard";
import { projectsSection } from "../../portfolio";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function ManualProjects() {
  const { isDark } = useContext(StyleContext);
  if (!projectsSection.display) {
    return null;
  }
  return (
    <div id="projects">
      <Fade bottom duration={1000} distance="20px">
        <div className="experience-container" id="projectsSection">
          <div>
            <h1 className="experience-heading">Projects</h1>
            <div className="experience-cards-div">
              {projectsSection.projects.map((card, i) => {
                return (
                  <ExperienceCard
                    key={i}
                    isDark={isDark}
                    cardInfo={{
                      company: card.company,
                      desc: card.desc,
                      date: card.date,
                      companylogo: card.companylogo,
                      role: card.role,
                      descBullets: card.descBullets,
                      footer: card.footer
                    }}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
}

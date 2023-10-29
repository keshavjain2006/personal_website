import React, { useContext } from "react";
import "./Clubs.scss";
import ExperienceCard from "../../components/experienceCard/ExperienceCard";
import { clubs } from "../../portfolio";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Clubs() {
  const { isDark } = useContext(StyleContext);
  if (clubs.display) {
    return (
      <div id="experience">
        <Fade bottom duration={1000} distance="20px">
          <div className="experience-container" id="clubs">
            <div>
              <h1 className="experience-heading">Clubs</h1>
              <div className="experience-cards-div">
                {clubs.experience.map((card, i) => {
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
  return null;
}

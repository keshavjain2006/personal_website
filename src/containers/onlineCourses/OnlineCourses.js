import React, { useContext } from "react";
import "./OnlineCourses.scss";
import EducationCard from "../../components/educationCard/EducationCard";
import { educationInfo } from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import "../achievement/Achievement.scss";
import AchievementCard from "../../components/achievementCard/AchievementCard";
import { onlineCoursesSection } from "../../portfolio";
import { Fade } from "react-reveal";

export default function OnlineCourses() {
  const { isDark } = useContext(StyleContext);
  if (educationInfo.display) {
    return (
      <div className="education-section" id="education">
        <Fade bottom duration={1000} distance="20px">
          {/* <div className="education-card-container"> */}
          {/* <div className="main" id="achievements"> */}
          <div className="achievement-main-div" id="online">
            {/* <div className="achievement-header"> */}
            <h1
              className={
                isDark
                  ? "dark-mode heading achievement-heading"
                  : "heading achievement-heading"
              }
            >
              Online Courses
            </h1>
            {/* </div> */}
          </div>
          <div className="achievement-cards-div">
            {onlineCoursesSection.onlineCoursesCards.map((card, i) => {
              return (
                <AchievementCard
                  key={i}
                  isDark={isDark}
                  cardInfo={{
                    title: card.title,
                    description: card.subtitle,
                    image: card.image,
                    imageAlt: card.imageAlt,
                    footer: card.footerLink
                  }}
                />
              );
            })}
            {/* </div> */}
          </div>
        </Fade>
      </div>
      // </div>
      // </div>
    );
  }
  return null;
}

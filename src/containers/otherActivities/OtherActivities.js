import React, { useContext } from "react";
import "./OtherActivities.scss";
import EducationCard from "../../components/educationCard/EducationCard";
import StyleContext from "../../contexts/StyleContext";
import "../achievement/Achievement.scss";
import AchievementCard from "../../components/achievementCard/AchievementCard";
import { otherActivitiesSection } from "../../portfolio";
import { Fade } from "react-reveal";

export default function OtherActivities() {
  const { isDark } = useContext(StyleContext);
  if (otherActivitiesSection.display) {
    return (
      <div className="education-section" id="other">
        <Fade bottom duration={1000} distance="20px">
          {/* <div className="education-card-container"> */}
          {/* <div className="main" id="achievements"> */}
          <div className="achievement-main-div">
            {/* <div className="achievement-header"> */}
            <h1
              className={
                isDark
                  ? "dark-mode heading achievement-heading"
                  : "heading achievement-heading"
              }
            >
              Other Activities
            </h1>
            {/* </div> */}
          </div>
          <div className="achievement-cards-div">
            {otherActivitiesSection.achievementsCards.map((card, i) => {
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

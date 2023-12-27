import React, {useContext} from "react";
import Headroom from "react-headroom";
import "./Header.scss";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import StyleContext from "../../contexts/StyleContext";
import {
  greeting,
  workExperiences,
  skillsSection,
  openSource,
  blogSection,
  talkSection,
  achievementSection
} from "../../portfolio";

function Header() {
  const {isDark} = useContext(StyleContext);

  return (
    <Headroom>
      <header className={isDark ? "dark-menu header" : "header"}>
        <a href="/" className="logo">
          <span className="grey-color"> &lt;</span>
          <span className="logo-name">{greeting.username}</span>
          <span className="grey-color">/&gt;</span>
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{color: "white"}}
        >
          <span className={isDark ? "navicon navicon-dark" : "navicon"}></span>
        </label>
        <ul className={isDark ? "dark-menu menu" : "menu"}>
          {(
            <li>
              <a href="#education">Education</a>
            </li>
          )}
          {/* {  (
            <li>
              <a href="#online">Online Courses</a>
            </li>
          )} */}
          { (
            <li>
              <a href="#research">Research</a>
            </li>
          )}
          { (
            <li>
              <a href="#workExperience">Work Experience</a>
            </li>
          )}
          { (
            <li>
              <a href="#jobility">Jobility</a>
            </li>
          )}
          { (
            <li>
              <a href="#clubs">Clubs</a>
            </li>
          )}
          { (
            <li>
              <a href="#community">Community Service</a>
            </li>
          )}
          {/* { (
            <li>
              <a href="#other">Other Activities</a>
            </li>
          )} */}
          { (
            <li>
              <a href="#honors">Awards</a>
            </li>
          )}
          { (
            <li>
              <a href="#media">Media Coverages</a>
            </li>
          )}
          {/* <li>
            <a href="#contact">Contact Me</a>
          </li> */}
          <li>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a>
              <ToggleSwitch />
            </a>
          </li>
        </ul>
      </header>
    </Headroom>
  );
}
export default Header;

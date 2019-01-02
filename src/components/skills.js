import React, { Component } from "react";
import Skill from "./skill";
export class Skills extends Component {
  static propTypes = {};

  render() {
    return (
      <section id="skills" >
        <div className="container">
          <h1>MY SKILLS</h1>
          <Skill skillName="HTML" percentage="95" />
          <Skill skillName="CSS" percentage="80" />
          <Skill skillName="JS" percentage="70" />
          <Skill skillName="React" percentage="80" />
          <Skill skillName="Redux" percentage="80" />
          <Skill skillName="Firebase" percentage="50" />
        </div>
      </section>
    );
  }
}

export default Skills;

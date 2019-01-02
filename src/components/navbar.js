import React, { Component } from "react";


export class navbar extends Component {
  static propTypes = {};

  render() {
    return (
      <div className="navbar ">
        <ul>
          <li>
            <a href="#home">HOME</a>
          </li>          
          <li>
            <a href="#about">ABOUT</a>
          </li>
          <li>
            <a href="#projects">PROJECTS</a>
          </li>
          <li>
            <a href="#contact">CONTACT</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default navbar;

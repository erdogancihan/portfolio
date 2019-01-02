import React, { Component } from "react";


export class Showcase extends Component {
  static propTypes = {};

  render() {
    return (
      <div id="showcase">
        <div className="triangle-left" />
        <div className="showcase-container">
          <h1>WELLCOME TO MY PORTFOLIO</h1>
          <p>My Name is Erdogan.</p>
          <p>I am a Frontend Web Developer.</p>
        </div>
      </div>
    );
  }
}

export default Showcase;

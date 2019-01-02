import React, { Component } from "react";

export class About extends Component {
  static propTypes = {};

  render() {
    return (
      <section id="about">
        <div className="triangle-right" />
        <div className="container">
          <h1>ABOUT ME</h1>
          <p>
            I worked for 20 years in the security sector. I have been always
            interested in information technologies. At 2003 I took Microsoft
            Certified System Engineer Course. Same year I passed MCP
            exam(Designing and Cofiguring Windows server 2000). At 2005 I took
            C# and SQL course. As I have a good job I did not think about
            changing my career. At 2013 I had MSc from information technologies.
          </p>
          <p>
            At 2018 I decided to change my work career. I started to take online
            courses about frontend web development. After HTML and CSS I started
            studing JS. As I was familier with C# and JAVA it did not take long
            to learn JS. After JS I studied React as it is popular and easy to
            learn.
          </p>
          <p>
            My first React project is kendinonar which is a forum site. It took
            quite long time to develop. After that I did two more React
            projects. After each project I learned more and turned back to my
            previous projects and made them better.{" "}
          </p>
        </div>
      </section>
    );
  }
}

export default About;

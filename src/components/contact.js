import React, { Component } from "react";


export class Contact extends Component {
  render() {
    return (
      <section id="contact">
        <div className="container">
          <h1>CONTACT ME</h1>
          <p>
            <i className="far fa-envelope" />{" "}
            <a href="mailto:erdogancihan@icloud.com">erdogancihan@icloud.com</a>
          </p>
          <div className="links">
            <a href="https://www.linkedin.com/in/erdo%C4%9Fan-cihan-bb02b1119">
              <i className="fab fa-linkedin-in"> </i>
            </a>
            <a href="https://github.com/erdogancihan">
              {" "}
              <i className="fab fa-github" />
            </a>
            </div>
            <br/>
        </div>
      </section>
    );
  }
}

export default Contact;

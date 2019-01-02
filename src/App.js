import React, { Component } from "react";
import { BrowserRouter} from "react-router-dom";

import {scroll} from "./components/scroll"
import Navbar from "./components/navbar";
import Showcase from "./components/showcase";
import About from "./components/about";
import Projects from "./components/projects";
import Skills from "./components/skills"
import Contact from "./components/contact"
import Footer from "./components/footer"

class App extends Component {

componentDidMount(){
  scroll();
}
  render() {
   // scroll();
    return (
      <BrowserRouter>
        <div className="App">
        <Navbar />
        <Showcase/>
          <About />
          <Skills/>
          <Projects/>
          <Contact/>
          <Footer/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

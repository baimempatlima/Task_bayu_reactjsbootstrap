// import logo from "./logo.svg";
import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbarr from "./Components/Navbar";
import Jumbotron from "./Components/Jumbotron";
import Profile from "./Components/Profile";
import Skill from "./Components/Skill";
import Contact from "./Components/Contact";
import Message from "./Components/Message";
import Footer from "./Components/Footer";

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbarr />
        <Jumbotron />
        <Profile />
        <hr />
        <Skill />
        <br />
        <hr />
        <Contact />
        <br />
        <hr />
        <Message />
        <Footer />
      </div>
    );
  }
}

export default App;

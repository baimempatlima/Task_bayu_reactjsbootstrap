// import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar";
import Jumbotron from "./Components/Jumbotron";
import Profile from "./Components/Profile";
import Skill from "./Components/Skill";
import Contact from "./Components/Contact";
import Message from "./Components/Message";
import Footer from "./Components/Footer";

function App() {
  return (
    <div>
      <Navbar />
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

export default App;

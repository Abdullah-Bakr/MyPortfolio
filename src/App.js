import About from "./About Me/About";
import "./App.css";
import Home from "./Home/Home";
import MyNav from "./Nav/MyNav";
import "bootstrap/dist/css/bootstrap.min.css";
import Skills from "./Skills/Skills";
import Portfolio from "./Portfolio/Portfolio";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";

function App() {
  return (
    <div>
      <MyNav />
      <Home />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

import React from "react";
import "./portfolio.css";

// images
import todo from "../todo.png";
import landpage from "../landing-page.png";
import space from "../space.png";
import weather from "../weather.png";
import shoes from "../shoes.png";
import age from "../age.png";

function Portfolio() {
  return (
    <div className="w-100 portfolio" id="portfolio">
      <div className="container">
        <h1 className="title">PORTFOLIO</h1>
        <p className="sub-title">My Projects</p>
        <div className="cards" data-aos="fade-up">
          <div className="card">
            <div className="icon">
              <img src={todo} alt="" />
            </div>
            <h4>Arabic TodoList</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius nemo
              voluptates nisi praesentium aut velit saepe sint, voluptatum
            </p>
            <a
              href="https://abdullah-bakr.github.io/ArabicTodo/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Take a Look
            </a>
          </div>
          <div className="card">
            <div className="icon">
              <img src={landpage} alt="" />
            </div>
            <h4>Fylo Landimg Page</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius nemo
              voluptates nisi praesentium aut velit saepe sint, voluptatum
            </p>
            <a
              href="https://abdullah-bakr.github.io/Landing-Page/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Take a Look
            </a>
          </div>
          <div className="card">
            <div className="icon">
              <img src={space} alt="" />
            </div>
            <h4>Space Tourism</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius nemo
              voluptates nisi praesentium aut velit saepe sint, voluptatum
            </p>
            <a
              href="https://abdullah-bakr.github.io/Space-Tourism/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Take a Look
            </a>
          </div>
          <div className="card">
            <div className="icon">
              <img src={weather} alt="" />
            </div>
            <h4>Weather App</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius nemo
              voluptates nisi praesentium aut velit saepe sint, voluptatum
            </p>
            <a
              href="https://abdullah-bakr.github.io/Weather-App/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Take a Look
            </a>
          </div>
          <div className="card">
            <div className="icon">
              <img src={shoes} alt="" />
            </div>
            <h4>Shoes Cart</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius nemo
              voluptates nisi praesentium aut velit saepe sint, voluptatum
            </p>
            <a
              href="https://abdullah-bakr.github.io/Shoes-Cart/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Take a Look
            </a>
          </div>
          <div className="card">
            <div className="icon">
              <img src={age} alt="" />
            </div>
            <h4>Age Calculator App</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius nemo
              voluptates nisi praesentium aut velit saepe sint, voluptatum
            </p>
            <a
              href="https://abdullah-bakr.github.io/age-calculator-app-main/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Take a Look
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;

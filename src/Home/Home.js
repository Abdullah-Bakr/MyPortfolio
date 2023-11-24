import React from "react";
import TypeWriter from "typewriter-effect";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import mypic from "../Hand coding-amico (1).png";
import "./home.css";

function Home() {
  return (
    <div className="w-100 home" id="home">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-6 info">
            <div className="first">
              <h3>Welcome EveryOne !</h3>
              <h1>
                <TypeWriter
                  options={{
                    autoStart: true,
                    loop: true,
                    delay: 60,
                    strings: ["I'm Abdullah Bakr", "I'm Web Developer"],
                  }}
                />
              </h1>
              <p>
                Bringing your vision to life through captivating web
                experiences.
              </p>
              <div className="icons">
                <a
                  className="icon"
                  href="https://www.linkedin.com/in/abdullah-bakr-3656811a0/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a
                  className="icon"
                  href="https://github.com/Abdullah-Bakr"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
                <a
                  className="icon"
                  href="https://twitter.com/Abdullah_Bakr01"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-6">
            <img className="my-pic mt-4" src={mypic} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./footer.css";

function Footer() {
  const currentYear = new Date();

  return (
    <div className="w-100 footer">
      <div className="row">
        <div className="foot">
          <p>&#169; {currentYear.getFullYear()} Created by Abdullah</p>

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
    </div>
  );
}

export default Footer;

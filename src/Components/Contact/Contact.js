import { IconButton } from "@mui/material";
import { Facebook, Instagram, LinkedIn } from "@mui/icons-material";
import React from "react";
import { Element } from "react-scroll";
import "./Contact.css";

const Contact = () => {
  return (
    <Element className="contact" id="contact">
      <h1>Contact</h1>
      <div className="contact__container">
        <p>
          Email : <span>albasith888@gmail.com</span>
        </p>
        <p>
          Github Username : <span>@albasith888</span>
        </p>
        <div className="contact__icons">
          <a
            href="https://www.linkedin.com/in/albasith/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton>
              <LinkedIn />
            </IconButton>
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100007926194047"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton>
              <Facebook />
            </IconButton>
          </a>
          <a
            href="https://www.instagram.com/its__me___abdul/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton>
              <Instagram />
            </IconButton>
          </a>
        </div>
      </div>
    </Element>
  );
};

export default Contact;
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import React from "react";
import Typewriter from "typewriter-effect";
import { useRef } from "react";
import { Linkedin, GitHub } from "react-feather";

export const Hero = ({ update }) => {
  const ref = useRef();
  update(ref, 0);
  return (
    <section
      id="hero"
      className="d-flex flex-column justify-content-center"
    >
      <Container data-aos="zoom-in" data-aos-delay="100">
        <h1 ref={ref}>Hello, I'm Nanami</h1>
        <Typewriter
          options={{
            strings: [
              "I'm a Developer",
              "I'm an Engineer",
              "And I'm a Lifelong Learner",
            ],
            autoStart: true,
            loop: true,
          }}
        />
        <div className="social-links">
          <Button variant="outline-dark" href="https://github.com/nami773">
            <GitHub /> Github
          </Button>
          <Button
            variant="outline-dark"
            href={process.env.REACT_APP_LINKEDIN}
          >
            <Linkedin /> Linkedin
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default Hero;

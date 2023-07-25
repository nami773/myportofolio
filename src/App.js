import "./App.css";
import { Header } from "./sections/Header";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Resume } from "./sections/Resume";
import { Portfolio } from "./sections/Portfolio";
import { Hobbies } from "./sections/Hobbies";
import { Contact } from "./sections/Contact";
import { Footer } from "./sections/Footer";
import React, { useState, useEffect } from "react";
import { ArrowUp, Menu, X } from "react-feather";

export const App = () => {
  const [loaded, setLoaded] = useState(false);
  const [index, setIndex] = useState(0);
  const [navActive, setNavActive] = useState(false);

  function UpdateIndex(ref, current) {
    useEffect(() => {
      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          setIndex(current);
          setNavActive(false);
        }
      });

      observer.observe(ref.current);
      return () => {
        observer.disconnect();
      };
    }, [ref]);
  }

  function NavbarClick() {
    setNavActive(!navActive);
  }

  useEffect(() => {
    setLoaded(true);
  }, []);
  return (
    <div className={navActive ? "mobile-nav-active" : ""}>
      {navActive ? (
        <X
          className="mobile-nav-toggle d-lg-none"
          size={48}
          onClick={NavbarClick}
        />
      ) : (
        <Menu
          className="mobile-nav-toggle d-lg-none"
          size={48}
          onClick={NavbarClick}
        />
      )}
      <Header index={index} />
      <Hero update={UpdateIndex} />
      <main id="main">
        <About update={UpdateIndex} />
        <Resume update={UpdateIndex} />
        {/* <Hobbies update={UpdateIndex} /> */}
        <Contact update={UpdateIndex} />
      </main>
      <Footer />
      {!loaded && <div id="preloader"></div>}
      <a
        href="#"
        className={`back-to-top d-flex align-items-center justify-content-center ${
          index === 0 ? "" : "active"
        }`}
      >
        <ArrowUp />
      </a>
    </div>
  );
};

export default App;

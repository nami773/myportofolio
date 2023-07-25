import Container from "react-bootstrap/Container";
import { useRef } from "react";

export const Hobbies = ({ update }) => {
  const hobbies1 = {
    "Cooking/Baking": "100%",
    Marathons: "80%",
    Travelling: "100%",
  };
  const hobbies2 = {
    "Martial Arts": "70%",
    Hiking: "60%",
    "Languages": "80%",
  };
  const ref = useRef();
  update(ref, 4);
  return (
    <section id="hobbies">
      <Container data-aos="fade-up">
        <div className="section-title">
          <h2 ref={ref}>Hobbies</h2>
          <div className="row skills-content">
            <div className="row skills-content">
              <div className="col-lg-6">
                {Object.entries(hobbies1).map(([key, value]) => {
                  return (
                    <div className="progress">
                      <span className="skill">
                        {key} <i className="val">{value}</i>
                      </span>
                      <div className="progress-bar-wrap">
                        <div
                          className="progress-bar"
                          style={{ width: value }}
                        ></div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="col-lg-6">
                {Object.entries(hobbies2).map(([key, value]) => {
                  return (
                    <div className="progress">
                      <span className="skill">
                        {key} <i className="val">{value}</i>
                      </span>
                      <div className="progress-bar-wrap">
                        <div
                          className="progress-bar"
                          style={{ width: value }}
                        ></div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

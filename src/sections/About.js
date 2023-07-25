import { useRef } from "react";
import { Container, Row, Table } from "react-bootstrap";
import img from "../img/profile.jpg";

export const About = ({ update }) => {
  const ref = useRef();
  update(ref, 1);
  return (
    <>
      <section id="about">
        <Container data-aos="fade-up">
          <div className="section-title">
            <h2 ref={ref}>About</h2>
          </div>
          <Row>
            <div className="col-lg-4">
              <img src={img} className="img-fluid" />
            </div>
            <div className="col-lg-8 pt-4 pt-lg-0 content">
              <Row>
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <i className="bi bi-chevron-right"></i>{" "}
                      <strong>Languages:</strong> English, Japanese
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>{" "}
                      <strong>Location:</strong> BC, Canada
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <i className="bi bi-chevron-right"></i>{" "}
                      <strong>Degree:</strong> Bachelor of Software Engineering
                    </li>
                  </ul>
                </div>
              </Row>
              <p>
                Hello, I'm Nanami, a dedicated and driven developer with a
                strong passion for taking on challenging problems. In my
                previous work experience, I served as a full-stack developer,
                successfully building eCommerce websites using Django,
                Bootstrap, and JavaScript. <br />
                <br />
                As my graduation from the University of Victoria approaches this
                September, I am enthusiastic about finding a position that will
                enable me to continue my growth as a developer through exciting
                and demanding projects.
              </p>
            </div>
          </Row>
        </Container>
      </section>
      <section id="skills" className="section-bg">
        <Container data-aos="fade-up">
          <div className="section-title">
            <h2>Skills</h2>
          </div>
          <Table responsive bordered hover id="skills-table">
            <thead>
              <tr className="table-primary">
                <th>Level</th>
                <th>Languages</th>
                <th>Tools</th>
                <th>Framework/Libraries</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th className="table-primary">Advanced</th>
                <td>Python, JavaScript/TypeScript, HTML, CSS</td>
                <td>Docker, GitHub, Bitbucket, Linux, Windows</td>
                <td>Django, jQuery, Bootstrap</td>
              </tr>
              <tr>
                <th className="table-primary">Intermediate</th>
                <td>Java, C, Ruby</td>
                <td>AWS, Azure DevOps</td>
                <td>React, ChakraUI</td>
              </tr>
              <tr>
                <th className="table-primary">Basic</th>
                <td>Assembly, Go, C++</td>
                <td>MATLAB, WordPress</td>
                <td>Vue, Spring Boot</td>
              </tr>
            </tbody>
          </Table>
          <p className="justify-content-start">
            <b className="mt-2">Other Skills: </b>
            <br />
            Familiar with DevOps practice (Agile). Experience with database
            management with PostgreSQL and MySQL
            <br />
            <b className="mt-2">Other Competencies: </b>
            <br />
            Problem-Solving Ability, Adaptability, Verbal and Written
            Communication, Teamwork, Responsibility, Intercultural Awareness,
            Open-mindedness
          </p>
        </Container>
      </section>
    </>
  );
};

export default About;

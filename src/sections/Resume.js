import { useRef } from "react";

export const Resume = ({ update }) => {
  const ref = useRef();
  update(ref, 2);
  return (
    <section id="resume" className="resume">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2 ref={ref}>Resume</h2>
        </div>

        <div className="row">
          <div className="col-lg-6">
            <h3 className="resume-title">Education</h3>
            <div className="resume-item pb-0">
              <h4>University of Victoria</h4>
              <h5>Bachelor of Software Engineering</h5>
              <ul>
                <li>Entrance Scholarship (2016)</li>
                <li>Studied one-year at Camosun (2018-2019)</li>
                <li>
                  Graduating <b>September 2023</b>{" "}
                </li>
              </ul>
            </div>
            <br />
            <h3 className="resume-title">Co-Op Experience</h3>
            <div className="resume-item">
              <h4>Python Developer</h4>
              <h5>August - December 2022</h5>
              <p>
                <em>Remote - Burnaby, BC</em>
              </p>
              <ul>
                <li>
                  Built CI/CD pipelines for AWS Lambda functions using
                  CodePipeline and Cloudformation to manage infrastructure as
                  code. The pipelines performed testing, which significantly
                  improved the code quality of AWS lambda functions.
                </li>
                <li>
                  Researched and created a guideline for developers to set up a
                  local lambda development environment using CodeCommit, while
                  enforcing MFA every 8 hours. As a result, saved over 20,000
                  dollars for the company to hire a professional to do the same
                  task.
                </li>
                <li>
                  Implemented a backend functionality that crawls websites
                  inside the given domain and detects secrets leaked such as API
                  keys and database passwords.
                </li>
                <li>
                  Handled the migration of existing AWS Lambda functions to the
                  CloudFormation stack.
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6">
            <h3 className="resume-title">Professional Experience</h3>
            <div className="resume-item">
              <h4>Part-Time Full Stack Developer</h4>
              <h5>August 2021 - August 2022</h5>
              <p>
                <em>Remote - Sapporo, Japan</em>
              </p>
              <ul>
                <li>
                  Designed and implemented a web application that host virtual
                  conferences for correspondence high school to recruit new
                  students.
                </li>
                <li>
                  Involved in all stages of development, from analyzing
                  requirements to updating the system after release upon
                  clients' feedback.
                </li>
                <li>
                  Built and deployed the web application using Django, jQuery,
                  and Bootstrap. The web application was successfully used by
                  major correspondence high school in Japan.
                </li>
              </ul>
            </div>
            <div className="resume-item">
              <h4>Full Stack Developer</h4>
              <h5>January - July 2021</h5>
              <p>
                <em>Sapporo, Japan</em>
              </p>
              <ul>
                <li>
                  Worked in a development team to build and debug a web
                  application for apparel companies to centralize management of
                  eCommerce marketing.
                </li>
                <li>
                  Took a leading role in developing and testing a Django REST
                  API for a service to communicate with various eCommerce
                  websites including Amazon and Rakuten.
                </li>
                <li>
                  Self-taught Django, jQuery, and Bootstrap throughout the work
                  term to contribute more to the team. As a result, became
                  responsible for training 6 new employees and gave several
                  presentations to the team to explain the existing REST API and
                  its code.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;

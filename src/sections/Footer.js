import { Linkedin, GitHub } from "react-feather";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

export const Footer = () => {
  return (
    <footer id="footer">
      Please follow me on...
      <br />
      <Container>
        <div className="social-links">
          <Button variant="outline-dark" href="https://github.com/nami773">
            <GitHub /> Github
          </Button>
          <Button
            variant="outline-dark"
            className="mx-2"
            href={process.env.REACT_APP_LINKEDIN}
          >
            <Linkedin /> Linkedin
          </Button>
        </div>
        <div className="copyright mt-2">
          &copy; Copyright{" "}
          <strong>
            <span>MyResume</span>
          </strong>
          . All Rights Reserved
        </div>
        <div className="credits">
          Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;

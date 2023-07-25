import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Home, User, File, Mail} from "react-feather";

export const Header = ({ index }) => {
  return (
    <header id="header" className="d-flex flex-column justify-content-center">
      <Navbar id="nav-menu">
        <ul>
          <li>
            <Nav.Link
              href="#hero"
              className={`scrollto ${index === 0 ? "active" : ""}`}
            >
              <Home /> <span>Home</span>
            </Nav.Link>
          </li>
          <li>
            <Nav.Link
              href="#about"
              className={`scrollto ${index === 1 ? "active" : ""}`}
            >
              <User />
              <span>About</span>
            </Nav.Link>
          </li>
          <li>
            <Nav.Link
              href="#resume"
              className={`scrollto ${index === 2 ? "active" : ""}`}
            >
              <File />
              <span>Resume</span>
            </Nav.Link>
          </li>
          {/* <li>
            <Nav.Link
              href="#portfolio"
              className={`scrollto ${index === 3 ? "active" : ""}`}
            >
              <Grid />
              <span>Portfolio</span>
            </Nav.Link>
          </li> */}
          {/* <li>
            <Nav.Link
              href="#hobbies"
              className={`scrollto ${index === 4 ? "active" : ""}`}
            >
              <Smile />
              <span>Hobbies</span>
            </Nav.Link>
          </li> */}
          <li>
            <Nav.Link
              href="#contact"
              className={`scrollto ${index === 5 ? "active" : ""}`}
            >
              <Mail />
              <span>Contact</span>
            </Nav.Link>
          </li>
        </ul>
      </Navbar>
    </header>
  );
};

export default Header;

import "../App.css";
import logo from "../assets/logo.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Search } from "react-bootstrap-icons";
import { Bell } from "react-bootstrap-icons";
import { PersonCircle } from "react-bootstrap-icons";

const MyNav = () => {
  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand href="" className="text-danger">
          <img src={logo} alt="Netflix Logo" style={{ height: "40px" }} />
        </Navbar.Brand>
        <Navbar className="gap-3">
          <Nav.Link href="#home" className="text-light d-none d-md-block">
            Home
          </Nav.Link>
          <Nav.Link href="#link" className="text-light d-none d-md-block">
            TV Shows
          </Nav.Link>
          <Nav.Link href="#link" className="text-light d-none d-md-block">
            Movies
          </Nav.Link>
          <Nav.Link href="#link" className="text-light d-none d-md-block">
            Recently Added
          </Nav.Link>
          <Nav.Link href="#link" className="text-light d-none d-md-block">
            My List
          </Nav.Link>
        </Navbar>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#link" className="text-white">
              <Search />
            </Nav.Link>
            <Nav.Link href="#link" className="text-light">
              KIDS
            </Nav.Link>
            <Nav.Link href="#link" className="text-white">
              <Bell />
            </Nav.Link>
            <Nav.Link href="#link" className="text-white">
              <PersonCircle />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNav;

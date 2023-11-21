import React from "react";
import { Navbar, Container, Nav, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Bangbar = ({ onClickFunc }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Panggil fungsi logout yang diteruskan dari prop
    onClickFunc();

    // Setelah logout, arahkan pengguna kembali ke halaman login atau halaman lain yang sesuai
    navigate("/"); // Ganti dengan path yang sesuai setelah logout
  };
  return (
    <Navbar expand="lg" fixed="top" style={{ backgroundColor: '#001f3f' }} variant="dark">
      <Container fluid>
        <Navbar.Brand>
          <Container fluid>
            <Link to="/" className="text-decoration-none text-reset h5">
              Marvel App
            </Link>
          </Container>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="justify-content-center">
          <Nav
            className="mx-auto my-2 my-lg-0"
            style={{ "--bs-scroll-height": "100px" }}
          >
            <Nav.Link className="header">
              <Link to="/" className="text-decoration-none text-reset">
                Home
              </Link>
            </Nav.Link>
            <Nav.Link className="header">
              <Link
                to="/daftarfilm"
                className="text-decoration-none text-reset"
              >
                Daftar Movie
              </Link>
            </Nav.Link>
            <Nav.Link className="header">
              <Link to="/about" className="text-decoration-none text-reset">
                About
              </Link>
            </Nav.Link>
          </Nav>
          <Nav.Link className="header">
            <Link to="/" className="text-decoration-none text-reset">
              <Button className="btn btn-outline-dark" onClick={handleLogout}>
                Logout
              </Button>
            </Link>
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Bangbar;

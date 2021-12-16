import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import Link from 'next/link';

const Header = () => {
  return (
    <Navbar
      collapseOnSelect
      sticky="top"
      expand="lg"
      bg="light"
      variant="light"
      className="px-4 py-2"
      // style={{
      //   padding: '10px 35px',
      // }}
    >
      {/* <div> */}
      {/* <Container style={{}}> */}
      <Link href="" passHref>
        <Navbar.Brand href="/" style={{}}>
          <Link href="/" passHref>
            <a
              style={{
                textDecoration: 'none',
                color: 'purple',
                fontWeight: 900,
                fontSize: '1.7rem',
              }}
            >
              Logo
            </a>
          </Link>
        </Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        {/* <Nav className="me-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
  </Nav> */}
        <Nav className=" ms-auto me-lg-5 align-middle">
          <Nav.Link href="/" className="text.dark ">
            <Link href="/" passHref className="text-dark ">
              <a className="text-dark px-2 text-decoration-none ">Home</a>
            </Link>
          </Nav.Link>
          <Nav.Link href="/about">
            <Link href="/about" passHref>
              <a className="text-dark px-2 text-decoration-none align-middle">
                About
              </a>
            </Link>
          </Nav.Link>
          <Nav.Link href="/contact">
            <Link href="/contact" passHref>
              <a className="text-dark px-2 text-decoration-none ">Contact</a>
            </Link>
          </Nav.Link>
          <Nav.Link href="/steps">
            <Link href="/steps" passHref>
              <a className="text-dark px-2  text-decoration-none align-middle">
                Steps
              </a>
            </Link>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
      {/* </Container> */}
      {/* </div> */}
    </Navbar>
  );
};

export default Header;

import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import Link from 'next/link';

const Header = () => {
  return (
    <Navbar
      collapseOnSelect
      sticky="top"
      expand="lg"
      // bg="light"
      variant="light"
      // className="px-4"
      // style={{ backgroundColor: 'purple' }}
      // style={{
      //   padding: '10px 35px',
      // }}
    >
      {/* <div> */}
      <Container style={{}}>
        <Link href="" passHref>
          <Navbar.Brand href="/" style={{}}>
            <Link href="/" passHref>
              <a
                style={{
                  textDecoration: 'none',
                  color: 'white',
                  fontWeight: 900,
                  fontSize: '1.7rem',
                }}
              >
                Logo
              </a>
            </Link>
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className="text-light border border-light"
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className=" ms-auto mx-5">
            <Nav.Link href="/" className=" ">
              <Link href="/" passHref className="">
                <a className="text-light px-2 text-decoration-none ">Home</a>
              </Link>
            </Nav.Link>
            <Nav.Link href="/about">
              <Link href="/about" passHref>
                <a className="text-light px-2 text-decoration-none align-middle">
                  About
                </a>
              </Link>
            </Nav.Link>
            <Nav.Link href="/contact">
              <Link href="/contact" passHref>
                <a className="text-light px-2 text-decoration-none ">Contact</a>
              </Link>
            </Nav.Link>
            <Nav.Link href="/steps">
              <Link href="/steps" passHref>
                <a className="text-light px-2  text-decoration-none align-middle ">
                  Steps
                </a>
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      {/* </div> */}
    </Navbar>
  );
};

export default Header;

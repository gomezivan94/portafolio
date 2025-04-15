import { Container, Nav, Navbar } from "react-bootstrap"
import './NavbarCustom.css'

function NavbarCustom() {
    return (
        <>
        <Navbar className="Navcustom p-5" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="#home">Ivan Gomez Dev</Navbar.Brand>
            <Nav>
              <Nav.Link href="#about">About Me</Nav.Link>
              <Nav.Link href="#skills">Skills</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        </>
    )
}

export default NavbarCustom
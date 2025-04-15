import { Container, Nav, Navbar  } from "react-bootstrap"
import './NavbarCustom.css'

function NavbarCustom() {
    return (
      <Navbar expand="lg" className="Navcustom sticky-top" data-bs-theme="dark">
  <Container>
    <Navbar.Brand href="#about"><span className="brandName">Ivàn Gomez</span><span>Dev</span></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto">
        <Nav.Link href="#about">Sobre mí</Nav.Link>
        <Nav.Link href="#skills">Habilidades</Nav.Link>
        <Nav.Link href="#projects">Proyectos</Nav.Link>
        <Nav.Link href="#contact">Contacto</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    )
}

export default NavbarCustom
import { Navbar as NavbarComp, Container, Nav } from 'react-bootstrap'

export default function Navbar() {
    return (
        <NavbarComp expand="lg"  className="fixed-top navbar">
            <Container>
                <NavbarComp.Brand href="#home">Interior</NavbarComp.Brand>
                <NavbarComp.Toggle aria-controls="basic-navbar-nav" />
                <NavbarComp.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link href="#home" className="ms-5">Home</Nav.Link>
                    <Nav.Link href="#link" className="ms-5">Services</Nav.Link>
                    <Nav.Link href="#link" className="ms-5">Blog</Nav.Link>
                    <Nav.Link href="#link" className="ms-5 btn-download">Download</Nav.Link>
                </Nav>
                </NavbarComp.Collapse>
            </Container>
        </NavbarComp>
    )
}

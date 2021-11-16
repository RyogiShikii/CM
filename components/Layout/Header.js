import { Navbar,Container, Nav, NavDropdown } from "react-bootstrap";

const Navigation = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="custom" variant="dark">
            <Container>
                <Navbar.Brand href="/">Home</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    <Nav.Link href="/PayDayLoan">Loans</Nav.Link>
                    <Nav.Link href="/ChequeCashing">ChequeCashing</Nav.Link>
                    </Nav>
                    <Nav>
                    <Nav.Link href="#deets">More deets</Nav.Link>
                    <Nav.Link eventKey={2} href="#memes">
                        Dank memes
                    </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation;
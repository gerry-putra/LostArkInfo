import React from "react";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/nav'
import Container from 'react-bootstrap/Container'

const Navigation = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/home">Lost Ark Info</Navbar.Brand>
                    <Nav className="ms-auto">
                        <Nav.Link href='/home'>Home</Nav.Link>
                        <Nav.Link href='/register'>Registration</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
};

export default Navigation;

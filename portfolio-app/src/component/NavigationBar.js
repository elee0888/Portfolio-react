import React from 'react';
import { Nav, Navbar} from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
.navbar{
    background-color: #222;
}

.navbar-brand, .navbar-nav .nav-link{
    color: #bbb

    &:hover {
        color: white;
    }
}
`;

export const NavigationBar= () => (
    <Styles>
        <Navbar.Brand href= "/"> Eric Lee</Navbar.Brand>
        <NavBar.Toggle aria-controls= "basic-navbar-nav"/>
        <Navbar.Collapse id= "basic-navbar-nav">
            <Nav className= "ml-auto">
                
            </Nav>
        </Navbar.Collapse>
    </Styles>
)
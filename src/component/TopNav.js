import React, { useState } from 'react'
import {
    Container, DropdownItem, DropdownMenu, DropdownToggle,
    Nav,
    Navbar,
    NavbarBrand, UncontrolledDropdown
} from "reactstrap";

import {
    Box
} from "react-feather";


const TopNav = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => setIsOpen(!isOpen)

    return (
        <Navbar color="dark" dark expand="md">
            <Container>
                <NavbarBrand href="/" >
                    <Box className ="m-2" title="Quizz" />
                    Quizz
                </NavbarBrand>
            </Container>
            <Nav className="mr-auto" navbar>
                <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                        Category
                    </DropdownToggle>
                    <DropdownMenu right>
                        <DropdownItem href="/animals">Animals</DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
            </Nav>
        </Navbar>
    )
}

export default TopNav
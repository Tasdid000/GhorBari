import React, { Component } from "react";
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import './Navbar.css';
class NavBars extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false
        }
    }
    navToggle = () => {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        })
    }
    render() {
        return (
            <div>
                <div>
                    <Navbar
                        expand="md"
                        fixed="top"
                        light
                        className="shadow p-3 md-5 bg-dark"
                        color="light"
                    >
                        <NavbarToggler onClick={this.navToggle}  style={{color:"#6053fc"}}/>
                        <NavbarBrand href="/">
                            <img src="assets/images/logo.png" style={{ height: "50px" }} alt="pic" />
                        </NavbarBrand>

                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav className="offset-lg-8 col-lg-7"
                                navbar
                            >
                                <NavItem>
                                    <NavLink href="/Add_Property">
                                        <p className="text">Add Property</p>
                                    </NavLink>
                                </NavItem>
                                <UncontrolledDropdown
                                    inNavbar
                                    nav
                                >
                                    <DropdownToggle
                                        nav
                                    >
                                        <span className="text">Guide</span>
                                    </DropdownToggle>
                                    <DropdownMenu right>
                                        <DropdownItem href="/loan-calculator" className="dropdowntext">
                                            <span className="dropdowntext">Loan Calculator</span>
                                        </DropdownItem><br />
                                        {/* <DropdownItem href="/interior" className="dropdowntext">
                                            <span className="dropdowntext">Interior</span>
                                        </DropdownItem> */}
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                                <UncontrolledDropdown
                                    inNavbar
                                    nav
                                >
                                    <DropdownToggle
                                        nav
                                    >
                                        <span className="text">Service</span>
                                    </DropdownToggle>
                                    <DropdownMenu right>
                                        <DropdownItem href="/architecture" className="dropdowntext">
                                            <span className="dropdowntext">Architecture</span>
                                        </DropdownItem><br />
                                        <DropdownItem href="/interior" className="dropdowntext">
                                            <span className="dropdowntext">Interior</span>
                                        </DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                                <NavItem >
                                    <NavLink href="/blog">
                                        <p className="text">Blog</p>
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Navbar>
                </div>
            </div>
        );
    }
}

export default NavBars;
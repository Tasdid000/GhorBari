import React, { useState, useEffect } from "react";
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import axios from 'axios';
import './Navbar.css';
import useUserProfile from '../Body/DashBoard/UserProfileHook';  // Import the useUserProfile hook
import { useHistory } from 'react-router-dom';
const NavBars = () => {
    const history = useHistory();
    const { userData, loading, error, clearUserData } = useUserProfile();

    const handleLogout = () => {
        localStorage.removeItem('access_token');
        clearUserData();
        history.push("/");
    };

    const [isNavOpen, setNavOpen] = useState(false);

    const navToggle = () => {
        setNavOpen(!isNavOpen);
    };

    return (
        <div>
            <Navbar
                expand="md"
                fixed="top"
                light
                className="shadow p-3 md-5 bg-dark"
                color="light"
            >
                <NavbarToggler onClick={navToggle} style={{ color: "#6053fc" }} />
                <NavbarBrand href="/">
                    <img src="/assets/images/logo.png" style={{ height: "50px" }} alt="pic" />
                </NavbarBrand>

                <Collapse isOpen={isNavOpen} navbar>
                    <Nav className="offset-lg-7 col-lg-7" navbar>
                        <NavItem>
                            <NavLink href="/Add_Property">
                                <p className="text">Add Property</p>
                            </NavLink>
                        </NavItem>
                        <UncontrolledDropdown inNavbar nav>
                            <DropdownToggle nav>
                                <span className="text">Guide</span>
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem href="/loan-calculator" className="dropdowntext">
                                    <span className="dropdowntext">Loan Calculator</span>
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        <UncontrolledDropdown inNavbar nav>
                            <DropdownToggle nav>
                                <span className="text">Service</span>
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem href="/architecture" className="dropdowntext">
                                    <span className="dropdowntext">Architecture</span>
                                </DropdownItem>
                                <DropdownItem href="/interior" className="dropdowntext">
                                    <span className="dropdowntext">Interior</span>
                                </DropdownItem>
                                <DropdownItem href="/home_loan" className="dropdowntext">
                                    <span className="dropdowntext">Home Loan</span>
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        <NavItem>
                            <NavLink href="/property">
                                <p className="text">Property</p>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/blog">
                                <p className="text">Blog</p>
                            </NavLink>
                        </NavItem>
                        {userData && (
                            <UncontrolledDropdown inNavbar nav>
                                <DropdownToggle nav>
                                    <img
                                        src={`http://127.0.0.1:8000${userData.data.image}`}
                                        width={"32"}
                                        height={"32"}
                                        sizes="32"
                                        style={{ borderRadius: "50%" }}
                                    />
                                </DropdownToggle>
                                <DropdownMenu center>
                                    <DropdownItem href="/dashboard/userprofile" className="dropdowntext">
                                        <span className="dropdowntext">DashBoard</span>
                                    </DropdownItem>
                                    <DropdownItem onClick={handleLogout} className="dropdowntext">
                                        <span className="dropdowntext">Logout</span>
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        )}
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
};

export default NavBars;

import React, { useState, useEffect, useReducer } from "react";
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
} from "reactstrap";
import { useSelector } from "react-redux";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

const HeaderUser = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  const username = useSelector((state) => state.newUser);

  const handleLogout = () => {
    Cookies.remove("login");
    Cookies.remove("username");
    Cookies.remove("token");
    router.push("/login");
  };

  return (
    <div className="header sticky">
      <Navbar dark expand="md">
        <Container>
          <NavbarBrand href="/">
            <h4 className="text-oren">SuitGame</h4>
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav navbar className="m-auto ">
              <NavItem>
                <NavLink href="#profile">
                  <h6 className="text-white">Profile</h6>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#list-game">
                  <h6 className="text-white">List Games</h6>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#suwit">
                  <h6 className="text-white">Suwit</h6>
                </NavLink>
              </NavItem>
            </Nav>
            <Nav navbar>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret className="text-white">
                  {username}
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem onClick={() => handleLogout()}>
                    Logout
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default HeaderUser;

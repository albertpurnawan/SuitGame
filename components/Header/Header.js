import Cookies from "js-cookie";
import React, { useState, useEffect } from "react";
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
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";

import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [login, setLogin] = useState(false);
  const [username, setUsername] = useState(null);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    const login = Cookies.get("login");
    if (login) {
      setLogin(true);
      setUsername(Cookies.get("username"));
    }
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 90) {
      setSticky(true);
    } else if (window.scrollY < 90) {
      setSticky(false);
    }
  };

  const handleLogout = () => {
    Cookies.remove("login");
    Cookies.remove("username");
    Cookies.remove("token");
    router.push("/login");
  };

  return (
    <div className={`header${sticky ? " sticky" : ""}`}>
      <Navbar dark expand="md">
        <Container>
          <NavbarBrand href="/">
            <h4 className="text-oren">SuitGame</h4>
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav navbar className="m-auto ">
              <NavItem>
                <NavLink href="#hero">
                  <h6 className="text-white">Home</h6>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#the-game">
                  <h6 className="text-white">Games</h6>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#feature">
                  <h6 className="text-white">Features</h6>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#requirement">
                  <h6 className="text-white">Requirements</h6>
                </NavLink>
              </NavItem>
            </Nav>
            {!login && (
              <Nav navbar>
                <NavItem>
                  <NavLink href="/register">
                    <h6 className="text-white">Register</h6>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/login">
                    <h6 className="text-white">Login</h6>
                  </NavLink>
                </NavItem>
              </Nav>
            )}
            {login && (
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
            )}
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;

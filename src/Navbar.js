import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavbarContainer = styled.nav`
  position: absolute;
  right: 0;
  top: 0;
  display: flex;
  justify-content: flex-end;
`;

const NavbarList = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
  padding: 20px;
  position: fixed;
  top: 0;
  width: 100%;
  background-color: cyan;
  font-weight: 900;
  justify-content: flex-end;
  z-index: 999;
`;

const NavbarItem = styled.li`
  margin-left: 20px;
`;

const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarList>
        <NavbarItem>
          <StyledLink to="/">About</StyledLink>
        </NavbarItem>
        <NavbarItem>
          <StyledLink to="/projects">Projects</StyledLink>
        </NavbarItem>
        <NavbarItem>
          <StyledLink to="/contact">Contact</StyledLink>
        </NavbarItem>
      </NavbarList>
    </NavbarContainer>
  );
};

export default Navbar;

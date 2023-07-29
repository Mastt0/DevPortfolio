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
`;

const NavbarItem = styled.li`
  margin-left: 20px;
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarList>
        <NavbarItem>
          <StyledLink to="/">Home</StyledLink>
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

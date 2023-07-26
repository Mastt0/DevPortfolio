import React from "react";
import styled from "styled-components";

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

const NavbarLink = styled.a`
  color: white;
  text-decoration: none;
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarList>
        <NavbarItem>
          <NavbarLink href="/">Home</NavbarLink>
        </NavbarItem>
        <NavbarItem>
          <NavbarLink href="/projects">Projects</NavbarLink>
        </NavbarItem>
        <NavbarItem>
          <NavbarLink href="/contact">Contact</NavbarLink>
        </NavbarItem>
      </NavbarList>
    </NavbarContainer>
  );
};

export default Navbar;

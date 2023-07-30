import React from "react";
import styled from "styled-components";

const ContactContainer = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
  padding: 20px;
  position: fixed;
  top: 0;
  width: 100%;
  background-color: black;
  font-weight: 299;
  color: white;
`;

const Contact = () => {
  return (
    <div>
      <ContactContainer>
        <h2>CONTACTS PAGE</h2>
        <p>Here is where some text can go</p>
      </ContactContainer>
    </div>
  );
};

export default Contact;

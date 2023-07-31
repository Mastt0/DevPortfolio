import React from "react";
import styled from "styled-components";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io";
import { IoLogoDiscord } from "react-icons/io5";

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
  position: fixed;
  top: 0;
  background-color: black;
  color: white;

  /*Used padding and width to center the contact form. Might not be exactly center of page. */
  padding: 100px;
  width: 90%;
`;

const SocialLink = styled.a`
  color: black;
  margin: 10px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center; // This will center the button horizontally
  justify-content: space-between; // This will push the button to the bottom
  width: 100%;
  max-width: 500px;
  height: 100%;
`;

const Input = styled.input`
  margin-bottom: 1rem;
  padding: 1rem;
  width: 100%;
  outline: none;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const Textarea = styled.textarea`
  resize: none;
  width: 100%;
  margin-bottom: 1rem;
  padding: 1rem;
  outline: none;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const Button = styled.button`
  margin-top: 1rem;
  padding: 1rem 2rem;
  outline: none;
  border: none;
  background: cyan;
  color: black;
  font-weight: 785;
  border-radius: 5px;
  cursor: pointer;
`;

const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const PTagIconContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 8em;
`;

const Contact = () => {
  return (
    <ContactContainer>
      <h2>Send Me an Email Here</h2>
      <p></p>

      <Form action="https://formspree.io/YourFormspreeIDHere" method="POST">
        <Input type="text" name="name" placeholder="Your Name" />
        <Input type="email" name="email" placeholder="Your Email" />
        <Input type="text" name="subject" placeholder="Subject" />
        <Textarea name="message" placeholder="Message"></Textarea>
        <Button type="submit">Send</Button>
      </Form>
      <PTagIconContainer>
        <p>Or contact me via social media</p>
      </PTagIconContainer>
      <IconContainer>
        <SocialLink href="#">
          <IoLogoGithub style={{ color: "Cyan", fontSize: "4em" }} />
        </SocialLink>
        <SocialLink href="#">
          <IoLogoLinkedin style={{ color: "cyan", fontSize: "4em" }} />
        </SocialLink>
        <SocialLink href="#">
          <IoLogoDiscord style={{ color: "cyan", fontSize: "4em" }} />
        </SocialLink>
      </IconContainer>
    </ContactContainer>
  );
};

export default Contact;

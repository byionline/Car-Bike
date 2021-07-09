import { faPhoneAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Logo } from "../logo";
const FooterContainer = styled.div`
  //min-height: 24em;
  //   background-color: #1d2124;
  ${tw`
  bg-blue-500
    flex
    flex-col
    min-w-full
    pt-10
    md:pt-16
    items-center
    justify-center
  `};
`;
const InnerContainer = styled.div`
  ${tw`
    flex
    w-full
    h-full
    max-w-screen-2xl
    flex-wrap
  `};
`;
const BottomContainer = styled.div`
  ${tw`
    w-full
    flex
    max-w-screen-2xl
    justify-center
    // md:justify-start
    mt-7
    md:mt-1
  `};
`;
const CopyrightText = styled.h6`
  font-size: 12px;
  ${tw`
//   items-center
    text-white
  `}
`;
const AboutContainer = styled.div`
  ${tw`
    flex
    flex-col
    mr-2
    md:mr-16
    pl-10
    pr-10
    md:pl-3
    md:pr-3
  `};
`;
const AboutText = styled.p`
  ${tw`
    text-white
    text-sm
    font-normal
    max-w-xs
    leading-5
    mt-2
  `};
`;
const SectionContainer = styled.div`
  ${tw`
    w-full
    md:w-auto
    flex
    flex-col
    mr-2
    md:mr-16
    pl-10
    pr-10
    md:pl-3
    md:pr-3
    mt-7
    md:mt-0
  `};
`;
const LinksList = styled.ul`
  ${tw`
    outline-none
    list-none
    flex
    flex-col
  `};
`;
const ListItem = styled.li`
  ${tw`
    mb-3
  `};
  & > a {
    ${tw`
      text-sm
    text-white
      transition-all
      hover:text-gray-200
    `};
  }
`;
const HeaderTitle = styled.h3`
  ${tw`
    text-2xl
    font-bold
    text-white
    mb-3
  `};
`;
const HorizontalContainer = styled.div`
  ${tw`
    flex
    items-center
  `};
`;
const BlueIcon = styled.span`
  ${tw`
    w-9
    h-9
    rounded-full
    bg-white
    flex
    items-center
    justify-center
    text-blue-500
    text-base
    mr-2
  `};
`;
const SmallText = styled.h6`
  ${tw`
    text-sm
    text-white
  `};
`;
export function Footer() {
  return (
    <FooterContainer>
      <InnerContainer>
        <AboutContainer>
          <Logo />
          <AboutText>
            Car &amp; Bike is a rental company located in many countries across
            the world which has high quality Car &amp; Bike and provide top
            rated services.
          </AboutText>
        </AboutContainer>
        <SectionContainer>
          <HeaderTitle>Our Links</HeaderTitle>
          <LinksList>
            <ListItem>
              <a href="#">Home</a>
            </ListItem>
            <ListItem>
              <a href="#">About Us</a>
            </ListItem>
            <ListItem>
              <a href="#">Services</a>
            </ListItem>
            <ListItem>
              <a href="#">Models</a>
            </ListItem>
            <ListItem>
              <a href="#">Blog</a>
            </ListItem>
          </LinksList>
        </SectionContainer>
        <SectionContainer>
          <HeaderTitle>Other Links</HeaderTitle>
          <LinksList>
            <ListItem>
              <a href="#">FAQ</a>
            </ListItem>
            <ListItem>
              <a href="#">Contact Us</a>
            </ListItem>
            <ListItem>
              <a href="#">Support</a>
            </ListItem>
            <ListItem>
              <a href="#">Privacy Policy</a>
            </ListItem>
            <ListItem>
              <a href="#">Terms &amp; Conditions</a>
            </ListItem>
          </LinksList>
        </SectionContainer>
        <SectionContainer>
          <HeaderTitle>Call Now</HeaderTitle>
          <HorizontalContainer>
            <BlueIcon>
              <FontAwesomeIcon icon={faPhoneAlt} />
            </BlueIcon>
            <SmallText>+91 323-564-2357</SmallText>
          </HorizontalContainer>
        </SectionContainer>
        <SectionContainer>
          <HeaderTitle>Mail</HeaderTitle>
          <HorizontalContainer>
            <BlueIcon>
              <FontAwesomeIcon icon={faEnvelope} />
            </BlueIcon>
            <SmallText>info@carbike.com</SmallText>
          </HorizontalContainer>
        </SectionContainer>
      </InnerContainer>
      <BottomContainer>
        <CopyrightText>
          Copyright &copy; {new Date().getFullYear()} Car &amp; Bike. All rights
          reserved.
        </CopyrightText>
      </BottomContainer>
    </FooterContainer>
  );
}
import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillMediumCircle, AiFillMediumSquare } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
        <a style={{ display: 'flex', alignItems: 'center', color:"white" }} href="/">
          <DiCssdeck size="3rem" /> <span>Portfolio</span>
        </a> 
    </Div1>
    <Div2>
      <li>
          <NavLink href="#projects">Projects</NavLink>
      </li>
      <li>
          <NavLink href="#tech">Technologies</NavLink>
      </li>        
      <li>
          <NavLink href="#about">About</NavLink>
      </li>        
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/Ahib-Afnan-Siam">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/ahib-afnan-siam-585081175/">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://medium.com/@ahibafnan99">
        <AiFillMediumSquare size="3rem"/>
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
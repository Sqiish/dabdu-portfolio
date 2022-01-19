import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () => (
  <div>
    <Container>
      <Div1>
      <Link href="/">
        <a style={{ display: "flex", alignItems: "center", color: "white", marginBottom: "20px"}}>
          <DiCssdeck size="3rem" style={{ color: "#00d4ff"}}  /> <Span>dabdu</Span>
        </a>
      </Link>
      </Div1>
      <Div2>
        <li>
          <Link href="#projects">
            <NavLink>Projects</NavLink>
          </Link>
        </li>
        <li>
          <Link href="#tech">
            <NavLink>Technologies</NavLink>
          </Link>
        </li>
        <li>
          <Link href="#about">
            <NavLink>About Me</NavLink>
          </Link>
        </li>
      </Div2>
      <Div3>
        <SocialIcons href='#'>
          <AiFillGithub size="3rem" style={{ color: "#00d4ff"}}  />
        </SocialIcons>
        <SocialIcons href='#'>
          <AiFillLinkedin size="3rem" style={{ color: "#00d4ff"}}  />
        </SocialIcons>
        <SocialIcons href='#'>
          <AiFillTwitterCircle size="3rem" style={{ color: "#00d4ff"}}  />
        </SocialIcons>
      </Div3>
    </Container>
  </div>
);

export default Header;

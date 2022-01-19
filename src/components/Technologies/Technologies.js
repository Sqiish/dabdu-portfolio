import React from 'react';
import { DiFirebase, DiReact } from 'react-icons/di';
import { FaReacteurope, } from 'react-icons/fa';
import { SiJavascript, SiExpertsexchange, SiMongodb, SiMysql, SiRedux} from 'react-icons/si';
import { IoLogoNodejs } from 'react-icons/io';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <SectionTitle>Technologies I USed</SectionTitle>
    <SectionText>
      I've Worked with a range a technologies in the web and mobile development Ecosystem, From FrontEnd to BackEnd
    </SectionText>
    <List>
      <ListItem>
        <SiJavascript size="5rem" style={{ color: "#00d4ff"}} />
        <ListContainer>
          <ListTitle>JavaScript</ListTitle>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiReact size="5rem" style={{ color: "#00d4ff"}} />
        <ListContainer>
          <ListTitle>React JS</ListTitle>
        </ListContainer>
      </ListItem>
      <ListItem>
        <FaReacteurope size="5rem" style={{ color: "#00d4ff"}} />
        <ListContainer>
          <ListTitle>React Native</ListTitle>
        </ListContainer>
      </ListItem>
      <ListItem>
        <SiRedux size="5rem" style={{ color: "#00d4ff"}} />
        <ListContainer>
          <ListTitle>Redux</ListTitle>
        </ListContainer>
      </ListItem>
      <ListItem>
        <IoLogoNodejs size="5rem" style={{ color: "#00d4ff"}} />
        <ListContainer>
          <ListTitle>Node Js</ListTitle>
        </ListContainer>
      </ListItem>
       <ListItem>
        <SiExpertsexchange size="5rem" style={{ color: "#00d4ff"}} />
        <ListContainer>
          <ListTitle>Express JS</ListTitle>
        </ListContainer>
      </ListItem>
      <ListItem>
        <SiMongodb size="5rem" style={{ color: "#00d4ff"}} />
        <ListContainer>
          <ListTitle>MongoDB</ListTitle>
        </ListContainer>
      </ListItem>
      <ListItem>
        <SiMysql size="5rem" style={{ color: "#00d4ff"}} />
        <ListContainer>
          <ListTitle>MySQL</ListTitle>
        </ListContainer>
      </ListItem>
     <ListItem>
        <DiFirebase size="5rem" style={{ color: "#00d4ff"}} />
        <ListContainer>
          <ListTitle>FireBaseDB</ListTitle>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;

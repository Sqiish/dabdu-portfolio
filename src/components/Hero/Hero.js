import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        HeY, My Name is Ibrahim Dauda ;)<br />
        I'm a FrontEnd Developer,
        {/* <br />I build Mobile & Web Application */}
      </SectionTitle>
      <SectionText>
        Frontend developer with a Creative mindset, focusing towards the
        development of applications to deliver solutions with a creative and customer
        first approach. I am open-minded and focused on never-ending professional
        self-improvement and highly interested in working as a Frontend Developer
        {/* I’ve always been someone who has both a creative and logical MindSet,
      I am open-minded and focused on never-ending professional self-improvement and highly
       interested in working as a Full-Stack Web or Mobile App Developer using JavaScript Technologies 
       @ any Reputable Tech Company. */}
      </SectionText>
      <Button>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;
import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 20, text: 'Live & Completed Projects'},
  { number: 250000, text: 'Lines of Code', },
  { number: 150, text: 'Cups of CoFFee', },
  { number: 2, text: 'Awards & Recognition', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Numbers</SectionTitle>
    <Boxes>
      {data.map((card, index) =>(
        <Box key={index}>
          <BoxNum>{card.number}+</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;

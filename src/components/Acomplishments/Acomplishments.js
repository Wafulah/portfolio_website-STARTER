import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 2020, text: 'Digital Menu'},
  { number: 2021, text: 'E-AgriMarketplace', },
  { number: 2022, text: 'Crop Recommendation ', },
  { number: 2023, text: 'Cancer Detection System', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Acomplishments</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.number}</BoxNum>
          <BoxText>{card.text}</BoxText>

        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;

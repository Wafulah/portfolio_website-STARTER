import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
  <LeftSection>
    <SectionTitle main center>
     Welcome To <br />
     My Personal Portfolio
    </SectionTitle>
    <SectionText>
      An Expirienced Professional Web developer specialising in React, Django and Machine learning. We Offer Best Quality Software Products at an affordable Price. 
    </SectionText>
    <Button onClick={() => window.location = 'https://google.com'}>
    Learn More
    </Button>
  </LeftSection>
  </Section>
);

export default Hero;
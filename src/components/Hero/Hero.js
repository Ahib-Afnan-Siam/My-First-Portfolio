import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionText>
        Hello! I am Ahib Afnan Siam.
      </SectionText>
      <SectionTitle main center>
        Welcome To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
      Wish to build up a career employing experience and keenness, academic skills, ability to communicate ideas, commitment to accept challenging work in a well-established and organized organization that is rapidly expanding and offers good advancement potential. 
      </SectionText>
      <Button onClick={() => window.location = 'https://drive.google.com/file/d/1GTb98GpVdZ2MNO5oIik76fPtYi02Rheo/view?usp=sharing'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;
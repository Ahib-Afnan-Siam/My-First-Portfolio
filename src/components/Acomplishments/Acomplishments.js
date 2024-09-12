import React from 'react';

import { Section, SectionDivider, SectionTitle, } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { Box, Boxes, BoxNum, BoxText, BoxArray,  MiddleSection } from './AcomplishmentsStyles';

const data = [
  { number: 20, text: 'Open Source Projects'},
  { array: ['Winner'], text: 'NDESC Astronomy Competition' },
  { array: ['Winner'], text: 'National Space Olympiad Competition' },
  { array: ['Top 5'], text: 'Misssion OZ 2022' },
  { array: ['Winner'], text: 'Mind Sparks' },
  { array: ['Top 5'], text: 'Odommo 50' },
  { array: ['Vice President'], text: 'Notre Dame Eco & Space Club' },
  { array: ['Director'], text: 'Robotics Club of BRAC University' },
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Achievements</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          {card.array ? <BoxArray>{card.array.join(', ')}</BoxArray> : <BoxNum>{`${card.number}+`}</BoxNum>}
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
    <MiddleSection>
      <Button onClick={() => window.location = 'https://drive.google.com/file/d/1GTb98GpVdZ2MNO5oIik76fPtYi02Rheo/view?usp=sharing'}>Learn More</Button>
    </MiddleSection>
    <SectionDivider/>
  </Section>
);

export default Acomplishments;

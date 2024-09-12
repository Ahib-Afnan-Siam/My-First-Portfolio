import React from 'react';
import { DiFirebase, DiReact, DiZend, DiAndroid, DiCodeBadge, DiUnitySmall, DiRasberryPi, DiPython } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a diverse set of technologies across multiple domains.
      From Front-End Development to AI and Machine Learning.
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experiece with <br />
            React.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Node and Databases
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiZend size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            Experience with <br />
            tools like Figma
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiCodeBadge size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Programming</ListTitle>
          <ListParagraph>
            Experiece with <br />
            programming languages like <br />
            Python, C++ and Java
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiAndroid size="3rem" /> 
        </picture>
        <ListContainer>
          <ListTitle>App Development</ListTitle>
          <ListParagraph>
            Experiece with <br />
            Dart and Flutter
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiUnitySmall size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Game Development</ListTitle>
          <ListParagraph>
            Experiece with <br />
            Unity and PyGame
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiRasberryPi size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Robotics</ListTitle>
          <ListParagraph>
            Experiece with <br />
            tools like Arduino, <br />
            Raspberry Pi and ROS
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <br />
      <ListItem>
        <picture>
          <DiPython size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>AI And Machine Learning</ListTitle>
          <ListParagraph>
            Experiece with <br />
            tools like PyTorch, <br />
            Scikit-Learn and OpenCv
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Container, Button } from 'components/common'
import dev from 'assets/illustrations/skills.svg'
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles'

export const Skills = () => (
  <Wrapper id="about">
    <SkillsWrapper as={Container}>
      <Thumbnail>
        <img src={dev} alt="I’m Denner and I’m a Front-end Web Developer!" />
      </Thumbnail>
      <Details>
        <h1>Hi There!</h1>
        <p>
          I'm a 28 years old front-end developer from The Brazil. My skills and interest in web development are Javascript (ES6), ReactJS, React Native, VUE & Node.js.
        </p>
        <Button as={AnchorLink} href="#contact">
          Contact me
        </Button>
      </Details>
    </SkillsWrapper>
  </Wrapper>
);

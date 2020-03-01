import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Container, Button } from '../../../components/common'
import dev from '../../../assets/illustrations/dev.svg'
import { Wrapper, IntroWrapper, Details, Thumbnail } from './styles'
import {Header} from '../../theme/Header';

export const Intro = () => (
	<Wrapper>
		<Header />
		<IntroWrapper as={Container}>
			<Details>
				<h1>Hi There!</h1>
				<h4>I’m Denner and I’m a <front-end></front-end> Web Developer!</h4>
				<Button as={AnchorLink} href="#contact">
					Contact me
				</Button>
			</Details>
			<Thumbnail>
				<img src={dev} alt="Denner Rondinely" />
			</Thumbnail>
		</IntroWrapper>
	</Wrapper>
)
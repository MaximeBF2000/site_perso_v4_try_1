import styled from 'styled-components'
import { Image, Text, Button } from 'atomic-ui'
import { fromTheme, mixins, propCondition } from 'superstyle'

export const HeaderWrapper = styled.header`
	position: relative;
	width: 100%;
	height: 100vh;
	padding: 0 4rem;
	${mixins.flex('row')};
	color: ${fromTheme('colors.secondary_1')};
`

export const HeaderContent = styled.div`
	width: 60%;
	color: ${fromTheme('colors.white')};
`

export const HeaderColorBackground = styled.div`
	position: absolute;
	left: 0;
	top: 0;
	width: 40%;
	height: 100%;
	background: ${fromTheme('colors.blue')};
	z-index: -1;

	&::before {
		content: '';
		position: absolute;
		top: 0;
		left: 99%;
		width: 200px;
		height: 100%;
		background: ${fromTheme('colors.blue')};
		clip-path: polygon(0 0, 0% 100%, 20% 100%, 100% 0);
	}
`

export const UpTitle = styled(Text)`
	${propCondition('weight', val => `font-weight: ${val}`)};
`

export const Title = styled(Text)`
	${propCondition('weight', val => `font-weight: ${val}`)};
	margin-bottom: 2rem;
`

export const SubTitle = styled(UpTitle)``

export const CallToAction = styled(Button)`
	margin-top: 5rem;
	color: ${fromTheme('colors.white')};
	border-color: ${fromTheme('colors.white')};
	${mixins.transition('smooth')};

	&:hover {
		color: ${fromTheme('colors.orange')};
		border-color: ${fromTheme('colors.orange')};
	}
`

export const Profil = styled(Image)`
	--image-size: 250px;

	max-width: var(--image-size);
	height: var(--image-size);
	border-radius: 50%;
	border: solid 8px ${fromTheme('colors.blue')};
	margin: 0 auto;
`

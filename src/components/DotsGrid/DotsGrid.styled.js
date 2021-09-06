import styled, { css } from 'styled-components'
import { fromTheme, rgba } from 'superstyle'

export const DotsGrid = styled.div`
	position: relative;
	width: 100%;
	height: 100vh;
	${props => {
		console.log(props)
		const backgroundColor = fromTheme('colors.white')
		const squareColor = fromTheme('colors.lightgrey_1', color => rgba(color, 0.4))

		return css`
			background-image: linear-gradient(
					to bottom,
					transparent 50%,
					${backgroundColor} 50%
				),
				linear-gradient(to right, ${squareColor} 50%, ${backgroundColor} 50%);
			background-size: 20px 20px;
		`
	}}
`

import styled, { css } from 'styled-components'
import { propCondition } from 'superstyle'

const mapSizeToPadding = {
	s: '.3rem .8rem',
	m: '.5rem 1.2rem',
	l: '.8rem 1.5rem',
}

export const StyledButton = styled.button`
	all: unset;
  width: fit-content;
	cursor: pointer;
	display: flex;
  align-items: center;
	border: solid 1.5px transparent;
	border-radius: 0.25rem;
	gap: 0.5rem;
	${propCondition('variant', variant => {
		console.log({ variant })
		switch (variant) {
			case 'outlined':
				return css`
					${propCondition('color', color => `border-color: ${color}`)};
					${propCondition('color', color => `color: ${color}`)};
				`
			default:
				return css`
					${propCondition('color', color => `background: ${color}`)};
				`
		}
	})};
	${propCondition('textcolor', val => `color: ${val}`)};
	${propCondition(
		'size',
		val => `padding: ${mapSizeToPadding[val] || mapSizeToPadding['s']}`
	)};
`

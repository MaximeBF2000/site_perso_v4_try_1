import styled from 'styled-components'
import { propCondition } from 'superstyle'

export const TextWrapper = styled.p`
	${propCondition('color', val => `color: ${val}`)};
	${propCondition('size', val => `font-size: ${val}px`)};
`

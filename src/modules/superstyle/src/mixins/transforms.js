import { css } from 'styled-components'

export const translate = (x = 0, y = 0) => {
	return css`
		transform: translate(${x}px, ${y}px);
	`
}

export const rotate = (x = 0, y = 0, z = 0) => {
	return css`
		transform: rotate(${x}px, ${y}px, ${z}px);
	`
}

export const scale = (x = 1, y = 1) => {
	return css`
		transform: scale(${x}, ${y});
	`
}

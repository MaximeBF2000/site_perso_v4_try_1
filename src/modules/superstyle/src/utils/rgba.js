import { hexToRgb } from './hexToRgb'

export const rgba = (color, alpha) => {
	const isHexaColor = color.includes('#')

	const rgbColor = isHexaColor ? hexToRgb(color) : color

	const { r, g, b } = rgbColor || {}

	return `rgba(${r}, ${g}, ${b}, ${alpha})`
}

export const hexToRgb = hexColor => {
	const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hexColor)
	if (result) {
		const r = parseInt(result[1], 16)
		const g = parseInt(result[2], 16)
		const b = parseInt(result[3], 16)
		return { r, g, b }
	}
	return null
}

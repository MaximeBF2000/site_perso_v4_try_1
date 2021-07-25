import theme from './theme.config'

export const fromTheme = path => {
	const selectors = path.split('.')

	return selectors.reduce((acc, selector) => acc[selector] || null, theme)
}

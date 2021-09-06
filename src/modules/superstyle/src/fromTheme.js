import theme from './theme.config'

export const fromTheme = (path, transformer) => {
	const selectors = path.split('.')
  const value = selectors.reduce((acc, selector) => acc[selector] || null, theme)

  if (transformer) return transformer(value)

	return value
}

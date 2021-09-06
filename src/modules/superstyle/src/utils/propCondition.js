import { css } from 'styled-components'

export const propCondition = (condition, cssValue) => listOfProps => {
  const propValue = listOfProps[condition]

	if (propValue)
		return css`
			${cssValue(propValue)};
		`
}

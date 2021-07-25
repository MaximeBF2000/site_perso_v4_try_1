import { css } from 'styled-components'

const flexRow = css`
	flex-direction: row;
	align-items: center;
`

const flexColumn = css`
	flex-direction: column;
	align-items: center;
`

export const flex = (type, options = {}) => {
	const flexType = () => {
		switch (type) {
			case 'row':
				return flexRow
			case 'column':
				return flexColumn
			default:
				return flexColumn
		}
	}

	return css`
		display: flex;
		${flexType()};
		${options};
	`
}

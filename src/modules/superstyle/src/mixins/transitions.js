import { css } from 'styled-components'

export const transition = (type, options) => {
	if (type === 'smooth')
		return css`
			transition: ${options?.target ?? 'all'} ${options?.duration ?? '0.3s'} ${options?.animation ?? 'ease-in-out'};
		`
}

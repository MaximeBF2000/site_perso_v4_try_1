import React from 'react'
import classnames from 'classnames'
import { TextWrapper } from './Text.styled'

export const Text = ({ children, className, component, ...restProps }) => {
	return (
		<TextWrapper {...restProps} as={component} className={classnames(className)}>
			{children}
		</TextWrapper>
	)
}

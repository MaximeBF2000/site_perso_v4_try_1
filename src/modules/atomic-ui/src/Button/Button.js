import React, { Fragment } from 'react'
import Link from 'next/link'
import { StyledButton } from './Button.styled'
import classnames from 'classnames'

export const Button = ({
	children,
	className,
	variant,
	extraIcon,
  href,
  target,
	...restProps
}) => {
	const Wrapper = href ? Link : Fragment

	return (
		<Wrapper href={href} passHref={true}>
			<StyledButton
        as={href && 'a'}
				className={classnames(className)}
				variant={variant}
        target={target}
				{...restProps}
			>
				{children}
				{extraIcon}
			</StyledButton>
		</Wrapper>
	)
}

Button.defaultProps = {
	variant: 'normal',
}

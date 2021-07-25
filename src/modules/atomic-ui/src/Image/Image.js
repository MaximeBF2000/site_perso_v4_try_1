import React from 'react'
import classnames from 'classnames'
import { getAssetByName } from 'superassets'
import { StyledImage } from './Image.styled'

export const Image = ({ asset, className, ...restProps }) => {
	const assetRessource = getAssetByName(asset, '*')

	return (
		<StyledImage
			className={classnames(className)}
			src={assetRessource?.src}
			alt={assetRessource?.alt}
			{...restProps}
		/>
	)
}

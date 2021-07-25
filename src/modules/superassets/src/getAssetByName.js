import { mapAssets } from './mapAssets'

const allowedContentTypes = ['src', 'alt', '*']

export const getAssetByName = (assetName, contentType = 'src') => {
	if (!allowedContentTypes.includes(contentType)) {
		throw new TypeError(
			`Content type should be one of : ${JSON.stringify(
				allowedContentTypes,
				null,
				2
			)}. You provided : ${contentType}`
		)
	}

	if (contentType === '*') return mapAssets[assetName]

	return mapAssets[assetName][contentType]
}

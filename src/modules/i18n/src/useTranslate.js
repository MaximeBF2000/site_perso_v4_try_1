import { useState, useEffect } from 'react'
import englishDictionary from '../../../lang/en.json'
import frenchDictionary from '../../../lang/fr.json'

const mapLangToDictionary = {
	fr: frenchDictionary,
	en: englishDictionary,
}

export const useTranslate = () => {
	const [lang, setLang] = useState('fr')
	const [dictionary, setDictionary] = useState(mapLangToDictionary[lang])

	useEffect(() => {
		setDictionary(mapLangToDictionary[lang])
	}, [lang])

	return [
		path => {
			const elements = path.split('.')
			const translation = elements.reduce((acc, element) => acc[element], dictionary)

			return translation
		},
		setLang,
    lang,
	]
}

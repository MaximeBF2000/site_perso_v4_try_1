import React from 'react'
import { useTranslate } from 'i18n'
import { fromTheme } from 'superstyle'
import { AiOutlineArrowRight } from 'react-icons/ai'

import {
	HeaderWrapper,
	HeaderContent,
	HeaderColorBackground,
	UpTitle,
	Title,
	SubTitle,
	Profil,
	CallToAction,
} from './Header.styled'
import profil from '../../.profil.json'

export const Header = () => {
	const [t] = useTranslate()

	return (
		<HeaderWrapper>
			<HeaderColorBackground />
			<HeaderContent>
				<UpTitle size={28}>{t('home.header.uptitle')}</UpTitle>
				<Title component="h1" size={60} weight={900}>
					{t('home.header.title')}
				</Title>
				<SubTitle size={28}>{t('home.header.subtitle')}</SubTitle>
				<CallToAction
          href={profil.socials.github}
					color={fromTheme('colors.orange')}
					size="l"
					extraIcon={<AiOutlineArrowRight />}
					variant="outlined"
          target="_blank"
				>
					{t('home.header.cta')}
				</CallToAction>
			</HeaderContent>
			<Profil asset="profil-pic-2" />
		</HeaderWrapper>
	)
}

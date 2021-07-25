import React from 'react'
import { useTranslate } from 'i18n'
import { Button } from 'atomic-ui'
import { navigationMap } from './navigation'
import { NavbarWrapper, NavItemList, NavItemWrapper } from './Navbar.styled'

const NavItem = ({ item, i18n }) => {
  if (!item?.label || !item?.to) return
  const { label, to } = item
  const [t, _, currentLang] = i18n

  return (
    <NavItemWrapper>
      <Button href={navigationMap[to]}>{t(label)}</Button>
    </NavItemWrapper>
  )
}

export const Navbar = ({ navigation }) => {
  const i18n = useTranslate()

  return (
    <NavbarWrapper>
      {navigation && (
        <NavItemList>
          {navigation?.map(navItem => (
            <NavItem key={navItem?.id} item={navItem} i18n={i18n} />
          ))}
        </NavItemList>
      )}
    </NavbarWrapper>
  )
}

import styled from 'styled-components'
import { fromTheme, mixins } from 'superstyle'

export const NavbarWrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`

export const NavItemList = styled.ul`
  width: fit-content;
  ${mixins.flex('row', { gap: 20 })};
  list-style: none;
  padding: 1.2rem 3rem;
  margin-left: auto;
`

export const NavItemWrapper = styled.li`
  position: relative;
  cursor: pointer;
  font-size: 18px;

  &::after {
    content: '';
    position: absolute;
    top: calc(100% + 5px);
    left: 0;
    width: 100%;
    background: ${fromTheme('colors.orange')};
    height: 5px;
    transform-origin: left;
    ${mixins.scale(0)};
    ${mixins.transition('smooth')};
  }

  &:hover, &:focus {
    &::after {
      ${mixins.scale(.8)};
    }
  }
`
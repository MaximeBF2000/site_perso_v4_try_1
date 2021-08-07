import React from 'react'
import { DotsGrid as StyledDotsGrid } from './DotsGrid.styled'

export const DotsGrid = ({ size }) => {
  return (
    <StyledDotsGrid size={size} />
  )
}

DotsGrid.defaultProps = {
  size: 20,
}

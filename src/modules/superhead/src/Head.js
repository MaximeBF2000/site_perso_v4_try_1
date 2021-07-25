import React from 'react'
import { default as NextHead } from 'next/head'

export const Head = ({ children }) => {
  return (
    <NextHead>{children}</NextHead>
  )
}

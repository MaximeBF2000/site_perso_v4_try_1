import { createGlobalStyle } from 'styled-components'
import { fromTheme } from './fromTheme';

export const InjectGlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  body {
    color: ${fromTheme('colors.black')};
  }

  h1, h2, h3, h4, h5, h6 {
    font-size: unset;
  }
`

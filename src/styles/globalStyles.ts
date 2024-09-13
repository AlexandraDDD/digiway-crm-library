// глобальные стили
// src/styles/globalStyles.ts

import { createGlobalStyle } from 'styled-components'
import { colors, fonts } from './variables'

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: ${fonts.primary};
    color: ${colors.dark};
    background-color: ${colors.light};
  }

  /* Добавьте здесь другие глобальные стили */
`

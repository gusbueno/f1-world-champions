import styled, { createGlobalStyle } from 'styled-components'
import { rgba } from 'polished'

import { palette } from '../../../UI/core'

export const GlobalStyle = createGlobalStyle`
  body {
    overflow: hidden
  }
`

export const Container = styled.section`
  position: absolute;
  z-index: 999;
  background-color: ${rgba(palette.black, 0.5)};
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`
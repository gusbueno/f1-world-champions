import styled, { createGlobalStyle } from 'styled-components'
import { rgba } from 'polished'

import { palette, theme } from '../../../UI/core'

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
  cursor: pointer;
`

export const Content = styled.section`
  position:relative;
  width: 100%;
  height: 100%;
  max-height: none;
  background-color: white;
  cursor: default;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 0;
  overflow: hidden;

  @media (min-width: 768px) {
    width: 80%;
    max-height: 90%;
    height: auto;
    border-radius: ${theme.borderRadius};
  }
`

export const Footer = styled.div`
  padding: ${theme.space};
  box-sizing: border-box;
`
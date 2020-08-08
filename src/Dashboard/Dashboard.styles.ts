import styled from 'styled-components'

import { theme, palette } from '../UI/core'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
`

export const TitleWrapper = styled.section`
  display: flex;
  width: 100%;
  padding: ${theme.space};
  background-color: ${palette.primary};
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  flex-direction: column;
`

export const TitleText = styled.h1`
  font-size: ${theme.fontSize.xl};
  color: ${palette.black};
  font-family: Roboto;
  margin: 0;
`

export const SubTitleText = styled.span`
  font-size: ${theme.fontSize.default};
  color: ${palette.white};
  font-family: Roboto;
`

export const StateContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 92px);
`

export const StateText = styled.span`
  font-size: ${theme.fontSize.lg};
  font-family: Roboto;
`

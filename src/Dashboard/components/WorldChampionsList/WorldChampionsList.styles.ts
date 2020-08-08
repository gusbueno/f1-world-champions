import styled from 'styled-components'

import { theme, palette } from '../../../UI/core'

export const Row = styled.div`
  display: flex;
  padding: ${theme.space};
  box-sizing: border-box;
  width: 100%;
  justify-content: space-between;

  &:nth-child(even) {
    background-color: ${palette.jonquil};
  }
`

export const Col = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const SeasonText = styled.span`
  font-family: Roboto;
  font-size: ${theme.fontSize.default};
`

export const ChampionNameText = styled.span`
  font-family: Roboto;
  font-size: ${theme.fontSize.lg};
  font-weight: bold;
  margin-botton: ${theme.space};
`

export const PointsText = styled.span`
  font-family: Roboto;
  font-size: ${theme.fontSize.sm};
`
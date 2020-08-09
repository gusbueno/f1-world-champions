import styled, { css } from 'styled-components'
import { rgba } from 'polished'

import { theme, palette } from '../UI/core'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: auto;
`

export const Header = styled.section`
  width: 100%;
  padding: ${theme.space};
  box-sizing: border-box;
  background-color: ${palette.primary};
  display: flex;
  align-items: center;
  justify-content: center;
`

export const HeaderText = styled.span`
  font-family: Roboto;
  font-size: ${theme.fontSize.xl};
  color: ${palette.black};
`

export const StateContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  height: auto;

  @media (min-width: 768px) {
    height: 400px;
    flex: auto;
  }
`

export const StateText = styled.span`
  font-size: ${theme.fontSize.lg};
  font-family: Roboto;
`

export const Content = styled.section`
  display: flex;
  flex-direction: column;
`

interface IRow {
  isWorldChampion: boolean
}

export const Row = styled.div(({ isWorldChampion }: IRow) => {
  const worldChampionStyle = css`
    background-color: ${palette.secondary};
    color: ${palette.white};
  `
  return css`
    display: flex;
    padding: ${theme.space};
    box-sizing: border-box;
    width: 100%;
    justify-content: space-between;
    border-bottom: 1px solid ${rgba(palette.black, 0.2)};

    ${isWorldChampion && worldChampionStyle}
  `
})

export const Col = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 calc(${theme.space}/2);
`

export const WinnerLabelText = styled.span`
  font-family: Roboto;
  font-size: ${theme.fontSize.sm};
`

export const WinnerNameText = styled.span`
  font-family: Roboto;
  font-size: ${theme.fontSize.lg};
  font-weight: bold;
`

export const RaceNameText = styled.span`
  font-family: Roboto;
  font-size: ${theme.fontSize.default};
  font-weight: bold;
`

export const CountryNameText = styled.span`
  font-family: Roboto;
  font-size: ${theme.fontSize.sm};
`

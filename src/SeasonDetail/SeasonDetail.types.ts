import { IOpenModalAction, ICloseModalAction } from '../Dashboard/Dashboard.types'

export const FETCH_RACES_WINNERS_BY_YEAR_START = 'FETCH_RACES_WINNERS_BY_YEAR_START'
export const FETCH_RACES_WINNERS_BY_YEAR_SUCCESS = 'FETCH_RACES_WINNERS_BY_YEAR_SUCCESS'

export interface IRaceWinner {
  raceName: string,
  country: string,
  isWorldChampion: boolean,
  winnerFullName: string
}

export interface ISeasonDetailState {
  races: Array<any>,
  isLoading: boolean,
  season: number,
  worldChampion?: string
}

interface ISeasonDetailRacesWinnersStartAction {
  type: typeof FETCH_RACES_WINNERS_BY_YEAR_START
}

interface ISeasonDetailRacesWinnersSuccessAction {
  type: typeof FETCH_RACES_WINNERS_BY_YEAR_SUCCESS,
  races: Array<IRaceWinner>
}

export type SeasonDetailActionTypes =
  ISeasonDetailRacesWinnersStartAction |
  ISeasonDetailRacesWinnersSuccessAction |
  IOpenModalAction |
  ICloseModalAction

export interface ISeasonDetailProps {
  onGetRacesWinnersByYear: () => void
}

export type Props = ISeasonDetailProps & ISeasonDetailState

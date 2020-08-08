export const FETCH_WORLD_CHAMPIONS_BY_RANGE_START = 'FETCH_WORLD_CHAMPIONS_BY_RANGE_START'
export const FETCH_WORLD_CHAMPIONS_BY_RANGE_SUCCESS = 'FETCH_WORLD_CHAMPIONS_BY_RANGE_SUCCESS'
export const FETCH_RACES_WINNERS_BY_YEAR_START = 'FETCH_RACES_WINNERS_BY_YEAR_START'

export interface IWorldChampions {
  season: number,
  championFullName: string,
  points: number
}

export interface IDashboardState {
  worldChampions: Array<IWorldChampions>,
  isLoading: boolean
}

interface IDashboardWorldChampionsStartAction {
  type: typeof FETCH_WORLD_CHAMPIONS_BY_RANGE_START
}

interface IDashboardWorldChampionsSuccessAction {
  type: typeof FETCH_WORLD_CHAMPIONS_BY_RANGE_SUCCESS,
  worldChampions: Array<IWorldChampions>
}

export type DashboardActionTypes =
  IDashboardWorldChampionsStartAction |
  IDashboardWorldChampionsSuccessAction

export interface IDashboardProps {
  onGetWorldChampionsByRange: () => void,
  onGetRacesWinnersByYear: (year: number) => void
}

export type Props = IDashboardProps & IDashboardState

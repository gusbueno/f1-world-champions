export const FETCH_WORLD_CHAMPIONS_BY_RANGE_START = 'FETCH_WORLD_CHAMPIONS_BY_RANGE_START'
export const FETCH_WORLD_CHAMPIONS_BY_RANGE_SUCCESS = 'FETCH_WORLD_CHAMPIONS_BY_RANGE_SUCCESS'
export const ON_OPEN_MODAL = 'ON_OPEN_MODAL'
export const ON_CLOSE_MODAL = 'ON_CLOSE_MODAL'
export const FETCH_RACES_WINNERS_BY_YEAR_START = 'FETCH_RACES_WINNERS_BY_YEAR_START'

export interface IWorldChampions {
  season: number,
  championFullName: string,
  points: number
}

interface IModal {
  isOpen: boolean,
  season: number
}

export interface IDashboardState {
  worldChampions: Array<IWorldChampions>,
  isLoading: boolean,
  modal?: IModal
}

interface IDashboardWorldChampionsStartAction {
  type: typeof FETCH_WORLD_CHAMPIONS_BY_RANGE_START
}

interface IDashboardWorldChampionsSuccessAction {
  type: typeof FETCH_WORLD_CHAMPIONS_BY_RANGE_SUCCESS,
  worldChampions: Array<IWorldChampions>
}

interface IOpenModalAction {
  type: typeof ON_OPEN_MODAL,
  season: number
}

interface ICloseModalAction {
  type: typeof ON_CLOSE_MODAL
}

export type DashboardActionTypes =
  IDashboardWorldChampionsStartAction |
  IDashboardWorldChampionsSuccessAction |
  IOpenModalAction |
  ICloseModalAction

export interface IDashboardProps {
  onGetWorldChampionsByRange: () => void,
  onGetRacesWinnersByYear: (year: number) => void,
  onOpenModal: (season: number) => void,
  isModalOpen: boolean
}

export type Props = IDashboardProps & IDashboardState

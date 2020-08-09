export const FETCH_WORLD_CHAMPIONS_BY_RANGE_START = 'FETCH_WORLD_CHAMPIONS_BY_RANGE_START'
export const FETCH_WORLD_CHAMPIONS_BY_RANGE_SUCCESS = 'FETCH_WORLD_CHAMPIONS_BY_RANGE_SUCCESS'
export const ON_OPEN_MODAL = 'ON_OPEN_MODAL'
export const ON_CLOSE_MODAL = 'ON_CLOSE_MODAL'

export interface IWorldChampion {
  driverId: string,
  season: number,
  championFullName: string,
  points: number
}

interface IModal {
  isOpen: boolean
}

export interface IDashboardState {
  worldChampions: Array<IWorldChampion>,
  isLoading: boolean,
  modal?: IModal
}

interface IDashboardWorldChampionsStartAction {
  type: typeof FETCH_WORLD_CHAMPIONS_BY_RANGE_START
}

interface IDashboardWorldChampionsSuccessAction {
  type: typeof FETCH_WORLD_CHAMPIONS_BY_RANGE_SUCCESS,
  worldChampions: Array<IWorldChampion>
}

export interface IOpenModalAction {
  type: typeof ON_OPEN_MODAL,
  season: number,
  worldChampion: string
}

export interface ICloseModalAction {
  type: typeof ON_CLOSE_MODAL
}

export type DashboardActionTypes =
  IDashboardWorldChampionsStartAction |
  IDashboardWorldChampionsSuccessAction |
  IOpenModalAction |
  ICloseModalAction

export interface IDashboardProps {
  onGetWorldChampionsByRange: () => void,
  onOpenModal: (season: number, worldChampion: string) => void,
  closeModal: () => void,
  isModalOpen: boolean
}

export type Props = IDashboardProps & IDashboardState

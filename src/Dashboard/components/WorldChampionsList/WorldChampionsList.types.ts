import { IWorldChampions } from '../../Dashboard.types'

export interface Props {
  worldChampions: Array<IWorldChampions>,
  onOpenModal: (season: number) => void
}
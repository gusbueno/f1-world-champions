import { IWorldChampion } from '../../Dashboard.types'

export interface Props {
  worldChampions: Array<IWorldChampion>,
  onOpenModal: (season: number, worldChampion: string) => void
}
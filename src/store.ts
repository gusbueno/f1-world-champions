import { IDashboardState } from './Dashboard/Dashboard.types'

export interface IStore {
  dashboard: IDashboardState
}

export default {
  dashboard: {
    worldChampions: [],
    isLoading: false,
    modal: {
      isOpen: false,
      season: null
    }
  },
  seasonDetail: {
    races: [],
    isLoading: false
  }
}

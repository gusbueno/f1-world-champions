import { IDashboardState } from './Dashboard/Dashboard.types'

export interface IStore {
  dashboard: IDashboardState
}

export default {
  dashboard: {
    worldChampions: [],
    isLoading: false
  }
}

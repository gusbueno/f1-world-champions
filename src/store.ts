import { IDashboardState } from './Dashboard/Dashboard.types'
import { ISeasonDetailState } from './SeasonDetail/SeasonDetail.types'

export interface IStore {
  dashboard: IDashboardState,
  seasonDetail: ISeasonDetailState
}

export default {
  dashboard: {
    worldChampions: [],
    isLoading: false,
    modal: {
      isOpen: false,
      
    }
  },
  seasonDetail: {
    races: [],
    isLoading: false,
    season: null,
    worldChampion: null
  }
}

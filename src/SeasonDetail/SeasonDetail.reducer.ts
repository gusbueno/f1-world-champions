import store from '../store'
import {
  ISeasonDetailState,
  SeasonDetailActionTypes,
  FETCH_RACES_WINNERS_BY_YEAR_START,
  FETCH_RACES_WINNERS_BY_YEAR_SUCCESS
} from './SeasonDetail.types'
import { ON_OPEN_MODAL, ON_CLOSE_MODAL } from '../Dashboard/Dashboard.types'

const defaultState: ISeasonDetailState = store.seasonDetail

const seasonDetail = (state = defaultState, action: SeasonDetailActionTypes): ISeasonDetailState => {
  switch (action.type) {
    case ON_OPEN_MODAL: {
      const { season, worldChampion } = action
      return {
        ...state,
        season,
        worldChampion
      }
    }
    case ON_CLOSE_MODAL: {
      return {
        ...state,
        races: [],
        season: null,
        worldChampion: null
      }
    }
    case FETCH_RACES_WINNERS_BY_YEAR_START: {
      return {
        ...state,
        isLoading: true
      }
    }
    case FETCH_RACES_WINNERS_BY_YEAR_SUCCESS: {
      const { races } = action
      return {
        ...state,
        isLoading: false,
        races
      }
    }
    default:
      return state
  }
}

export default seasonDetail

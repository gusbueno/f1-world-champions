import store from '../store'
import {
  IDashboardState,
  DashboardActionTypes,
  FETCH_WORLD_CHAMPIONS_BY_RANGE_START,
  FETCH_WORLD_CHAMPIONS_BY_RANGE_SUCCESS,
  ON_OPEN_MODAL,
  ON_CLOSE_MODAL
} from './Dashboard.types'

const defaultState: IDashboardState = store.dashboard

const dashboard = (state = defaultState, action: DashboardActionTypes): IDashboardState => {
  switch (action.type) {
    case FETCH_WORLD_CHAMPIONS_BY_RANGE_START: {
      return {
        ...state,
        isLoading: true
      }
    }
    case FETCH_WORLD_CHAMPIONS_BY_RANGE_SUCCESS: {
      const { worldChampions } = action
      return {
        ...state,
        isLoading: false,
        worldChampions
      }
    }
    case ON_OPEN_MODAL: {
      return {
        ...state,
        modal: {
          isOpen: true
        }
      }
    }
    case ON_CLOSE_MODAL: {
      return {
        ...state,
        modal: {
          isOpen: false
        }
      }
    }
    default:
      return state
  }
}

export default dashboard

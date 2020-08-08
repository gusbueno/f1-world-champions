import { bindActionCreators, AnyAction } from 'redux'
import { ThunkDispatch } from 'redux-thunk'

import { IStore } from '../store'
import { getWorldChampionsByRange, getRacesWinnersByYear } from './Dashboard.actions'
import {
  getIsLoading,
  getWorldChampions
} from './Dashboard.selectors'

export const mapStateToProps = (state: IStore) => ({
  isLoading: getIsLoading(state),
  worldChampions: getWorldChampions(state)
})

export const mapDispatchToProps = (dispatch: ThunkDispatch<IStore, unknown, AnyAction>) => ({
  onGetWorldChampionsByRange: bindActionCreators(getWorldChampionsByRange, dispatch),
  onGetRacesWinnersByYear: bindActionCreators(getRacesWinnersByYear, dispatch)
})

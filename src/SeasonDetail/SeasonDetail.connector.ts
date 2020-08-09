import { bindActionCreators, AnyAction } from 'redux'
import { ThunkDispatch } from 'redux-thunk'

import { IStore } from '../store'
import { getRacesWinnersByYear } from './SeasonDetail.actions'
import { getIsLoading, getRaces, getSeason } from './SeasonDetail.selectors'

export const mapStateToProps = (state: IStore) => ({
  isLoading: getIsLoading(state),
  races: getRaces(state),
  season: getSeason(state)
})

export const mapDispatchToProps = (dispatch: ThunkDispatch<IStore, unknown, AnyAction>) => ({
  onGetRacesWinnersByYear: bindActionCreators(getRacesWinnersByYear, dispatch)
})

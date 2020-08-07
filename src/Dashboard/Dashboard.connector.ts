import { bindActionCreators, AnyAction } from 'redux'
import { ThunkDispatch } from 'redux-thunk'

import { IStore } from '../store'
import { getWorldChampionsByRange, getRacesWinnersByYear } from './Dashboard.actions'

export const mapStateToProps = () => ({ })

export const mapDispatchToProps = (dispatch: ThunkDispatch<IStore, unknown, AnyAction>) => ({
  onGetWorldChampionsByRange: bindActionCreators(getWorldChampionsByRange, dispatch),
  onGetRacesWinnersByYear: bindActionCreators(getRacesWinnersByYear, dispatch)
})

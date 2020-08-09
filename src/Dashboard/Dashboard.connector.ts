import { bindActionCreators, AnyAction } from 'redux'
import { ThunkDispatch } from 'redux-thunk'

import { IStore } from '../store'
import { getWorldChampionsByRange, openModal, closeModal } from './Dashboard.actions'
import {
  getIsLoading,
  getWorldChampions,
  getIsModalOpen
} from './Dashboard.selectors'

export const mapStateToProps = (state: IStore) => ({
  isLoading: getIsLoading(state),
  worldChampions: getWorldChampions(state),
  isModalOpen: getIsModalOpen(state)
})

export const mapDispatchToProps = (dispatch: ThunkDispatch<IStore, unknown, AnyAction>) => ({
  onGetWorldChampionsByRange: bindActionCreators(getWorldChampionsByRange, dispatch),
  onOpenModal: bindActionCreators(openModal, dispatch),
  closeModal: bindActionCreators(closeModal, dispatch)
})

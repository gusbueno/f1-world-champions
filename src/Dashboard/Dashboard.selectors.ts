import { createSelector } from 'reselect'
import { IStore } from '../store'

const getDashboard = ({ dashboard }: IStore) => dashboard

export const getIsLoading = createSelector(
  [getDashboard],
  ({ isLoading }) => isLoading
)

export const getWorldChampions = createSelector(
  [getDashboard],
  ({ worldChampions }) => worldChampions
)

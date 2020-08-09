import { createSelector } from 'reselect'
import { IStore } from '../store'

const getSeasonDetail = ({ seasonDetail }: IStore) => seasonDetail

export const getRaces = createSelector(
  [getSeasonDetail],
  ({ races }) => races
)

export const getSeason = createSelector(
  [getSeasonDetail],
  ({ season }) => season
)

export const getIsLoading = createSelector(
  [getSeasonDetail],
  ({ isLoading }) => isLoading
)

import { ThunkAction } from 'redux-thunk'
import axios from 'axios'

import { IStore } from '../store'
import { to, normalizeRacesWinners } from '../utils'
import { API_URL } from '../constants'
import {
  IRaceWinner,
  FETCH_RACES_WINNERS_BY_YEAR_START,
  FETCH_RACES_WINNERS_BY_YEAR_SUCCESS
} from './SeasonDetail.types'

export const fetchRacesWinnersByYearStart = () => ({
  type: FETCH_RACES_WINNERS_BY_YEAR_START
})

export const fetchRacesWinnersByYearSuccess = (races: Array<IRaceWinner>) => ({
  type: FETCH_RACES_WINNERS_BY_YEAR_SUCCESS,
  races
})

export const getRacesWinnersByYear = (): ThunkAction<Promise<any>, IStore, undefined, any> => {
  return async (dispatch, getState): Promise<any> => {
    const state = getState()
    const { season, worldChampion } = state.seasonDetail
    dispatch(fetchRacesWinnersByYearStart())

    const [err, result] = await to(axios.get(`${API_URL}${season}/results/1.json`))

    if (result) {
      return dispatch(fetchRacesWinnersByYearSuccess(normalizeRacesWinners(result.data.MRData.RaceTable.Races, worldChampion)))
    }

    err && console.log(err)
  }
}
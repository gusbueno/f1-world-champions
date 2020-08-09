import { ThunkAction } from 'redux-thunk'
import axios from 'axios'

import { IStore } from '../store'
import { to, normalizeWorldChampions } from '../utils'
import { API_URL } from '../constants'
import {
  FETCH_WORLD_CHAMPIONS_BY_RANGE_START,
  FETCH_WORLD_CHAMPIONS_BY_RANGE_SUCCESS,
  IWorldChampion,
  ON_OPEN_MODAL,
  ON_CLOSE_MODAL
} from './Dashboard.types'

const YEAR_LIST = Array.from({ length: 11 }, (_, value) => value+2005)

export const fetchWorldChampionsByRangeStart = () => ({
  type: FETCH_WORLD_CHAMPIONS_BY_RANGE_START
})

export const fechWorldChampionsByRangeSuccess = (worldChampions: Array<IWorldChampion>) => ({
  type: FETCH_WORLD_CHAMPIONS_BY_RANGE_SUCCESS,
  worldChampions
})

export const getWorldChampionsByRange = (): ThunkAction<Promise<any>, IStore, undefined, any> => {
  return async (dispatch): Promise<any> => {
    dispatch(fetchWorldChampionsByRangeStart())

    const [err, results] = await to(Promise.all(
      YEAR_LIST.map((year: number) => {
        return axios.get(`${API_URL}${year}/driverStandings/1.json`)
      })
    ))

    if (results) {
      return dispatch(fechWorldChampionsByRangeSuccess(normalizeWorldChampions(results)))
    }

    err && console.log(err)
  }
}

export const openModal = (season: number, worldChampion: string) => ({
  type: ON_OPEN_MODAL,
  season,
  worldChampion
})

export const closeModal = () => ({
  type: ON_CLOSE_MODAL
})

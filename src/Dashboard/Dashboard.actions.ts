import { ThunkAction } from 'redux-thunk'
import axios from 'axios'

import { IStore } from '../store'
import { to } from '../utils'
import {
  FETCH_WORLD_CHAMPIONS_BY_RANGE_START,
  FETCH_RACES_WINNERS_BY_YEAR_START
} from './Dashboard.types'

const YEAR_LIST = Array.from({ length: 11 }, (_, value) => value+2005)
const API = 'https://ergast.com/api/f1/'

export const fetchWorldChampionsByRangeStart = () => ({
  type: FETCH_WORLD_CHAMPIONS_BY_RANGE_START
})

export const fetchRacesWinnersByYear = () => ({
  type: FETCH_RACES_WINNERS_BY_YEAR_START
})

export const getWorldChampionsByRange = (): ThunkAction<Promise<any>, IStore, undefined, any> => {
  return async (dispatch): Promise<any> => {
    dispatch(fetchWorldChampionsByRangeStart())

    const [err, results] = await to(Promise.all(
      YEAR_LIST.map((year: number) => {
        return axios.get(`${API}${year}/driverStandings/1.json`)
      })
    ))

    err && console.log(err)
    results && console.log(results)
  }
}

export const getRacesWinnersByYear = (year: number): ThunkAction<Promise<any>, IStore, undefined, any> => {
  return async (dispatch): Promise<any> => {
    dispatch(fetchRacesWinnersByYear())

    const [err, result] = await to(axios.get(`${API}${year}/results/1.json`))

    err && console.log(err)
    result && console.log(result)
  }
}

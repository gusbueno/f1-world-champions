import { IWorldChampion } from './Dashboard/Dashboard.types'
import { IRaceWinner } from './SeasonDetail/SeasonDetail.types'

export const to = (promise: Promise<any>): Promise<Array<any>> => {
  return promise.then((data: any): Array<any> => {
    return [null, data]
  }).catch((err: object): Array<any> => [err])
}

export const normalizeWorldChampions = (data: Array<any>): Array<IWorldChampion> => {
  return data.map((seasonInfo): IWorldChampion => {
    const { season, StandingsLists } = seasonInfo.data.MRData.StandingsTable
    const { points, Driver: { driverId, givenName, familyName } } = StandingsLists[0].DriverStandings[0]

    return {
      driverId,
      season,
      championFullName: `${givenName} ${familyName}`,
      points
    }
  })
}

export const normalizeRacesWinners = (data: Array<any>, worldChampion: string): Array<IRaceWinner> => {
  return data.map((race: any): IRaceWinner => {
    const { raceName, Results, Circuit: { Location: { country } } } = race
    const { Driver: { driverId, givenName, familyName } } = Results[0]
    const isWorldChampion: boolean = worldChampion === driverId

    return {
      raceName,
      country,
      isWorldChampion,
      winnerFullName: `${givenName} ${familyName}`
    }
  })
}

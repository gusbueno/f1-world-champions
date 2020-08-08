import { IWorldChampions } from "./Dashboard/Dashboard.types"

export const to = (promise: Promise<any>): Promise<Array<any>> => {
  return promise.then((data: any): Array<any> => {
    return [null, data]
  }).catch((err: object): Array<any> => [err])
}

export const normalizeWorldChampions = (data: Array<any>): Array<IWorldChampions> => {
  return data.map((seasonInfo): IWorldChampions => {
    const { season, StandingsLists } = seasonInfo.data.MRData.StandingsTable
    const { points, Driver: { familyName, givenName } } = StandingsLists[0].DriverStandings[0]

    return {
      season,
      championFullName: `${familyName} ${givenName}`,
      points
    }
  })
}

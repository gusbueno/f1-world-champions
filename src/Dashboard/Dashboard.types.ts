export const FETCH_WORLD_CHAMPIONS_BY_RANGE_START = 'FETCH_WORLD_CHAMPIONS_BY_RANGE_START'
export const FETCH_RACES_WINNERS_BY_YEAR_START = 'FETCH_RACES_WINNERS_BY_YEAR_START'

export interface Props {
  onGetWorldChampionsByRange: () => void,
  onGetRacesWinnersByYear: (year: number) => void
}

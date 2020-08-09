import React from 'react'

import { Props } from './WorldChampionsList.types'
import { IWorldChampion } from '../../Dashboard.types'
import {
  Row,
  Col,
  SeasonText,
  ChampionNameText,
  PointsText
} from './WorldChampionsList.styles'
import Button from '../../../UI/Button'

const WorldChampionsList = ({ worldChampions, onOpenModal }: Props) => {
  const onShowSeasonDetail = (season: number, worldChampion: string) => {
    onOpenModal(season, worldChampion)
  }
  return (
    <>
      {worldChampions.map((worldChampionInfo: IWorldChampion, index: number) => {
        const { driverId, season, championFullName, points } = worldChampionInfo
        return (
          <Row key={index}>
            <Col>
              <SeasonText>Season: {season}</SeasonText>
            </Col>
            <Col>
              <ChampionNameText>{championFullName}</ChampionNameText>
              <PointsText>Points: {points}</PointsText>
            </Col>
            <Col>
              <Button theme="secondary" onClick={() => onShowSeasonDetail(season, driverId)}>Races</Button>
            </Col>
          </Row>
        )
      })}
    </>
  )
}

export default WorldChampionsList

import React from 'react'

import { Props } from './WorldChampionsList.types'
import { IWorldChampions } from '../../Dashboard.types'
import {
  Row,
  Col,
  SeasonText,
  ChampionNameText,
  PointsText
} from './WorldChampionsList.styles'
import Button from '../../../UI/Button'

const WorldChampionsList = ({ worldChampions }: Props) => {
  const onShowSeasonDetail = (season: number) => {
    console.log(season)
  }
  return (
    <>
      {worldChampions.map((worldChampionInfo: IWorldChampions, index: number) => {
        const { season, championFullName, points } = worldChampionInfo
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
              <Button theme="secondary" onClick={() => onShowSeasonDetail(season)}>Season detail</Button>
            </Col>
          </Row>
        )
      })}
    </>
  )
}

export default WorldChampionsList

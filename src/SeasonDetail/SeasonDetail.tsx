import React, { useEffect } from 'react'

import { Props, IRaceWinner } from './SeasonDetail.types'
import {
  Container,
  Header,
  HeaderText,
  StateContainer,
  StateText,
  Content,
  Row,
  Col,
  WinnerLabelText,
  WinnerNameText,
  RaceNameText,
  CountryNameText
} from './SeasonDetail.styles'

const SeasonDetail = ({ onGetRacesWinnersByYear, isLoading, season, races }: Props) => {
  useEffect(() => {
    onGetRacesWinnersByYear()
  }, [])

  const renderContent = () => {
    return races.length ? races.map((race: IRaceWinner, index: number) => {
      const { isWorldChampion, raceName, winnerFullName, country } = race
      return (
        <Row key={index} isWorldChampion={isWorldChampion}>
          <Col>
            <WinnerLabelText>Winner</WinnerLabelText>
            <WinnerNameText>{winnerFullName}</WinnerNameText>
          </Col>
          <Col>
            <RaceNameText>{raceName}</RaceNameText>
            <CountryNameText>{country}</CountryNameText>
          </Col>
        </Row>
      )
    }) : (
      <StateContainer>
        <StateText>No data...</StateText>
      </StateContainer>
    )
  }

  return (
    <Container>
      <Header>
        <HeaderText>Season {season}</HeaderText>
      </Header>
      {isLoading ? (
        <StateContainer>
          <StateText>Loading...</StateText>
        </StateContainer>
      ) : (
        <Content>
          {renderContent()}
        </Content>
      )}
    </Container>
  )
}

export default SeasonDetail

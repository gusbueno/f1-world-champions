import React, { useEffect } from 'react'

import { Props } from './Dashboard.types'
import {
  Container,
  TitleWrapper,
  TitleText,
  SubTitleText,
  StateContainer,
  StateText
} from './Dashboard.styles'
import WorldChampionsList from './components/WorldChampionsList'
import Modal from './components/Modal'

const Dashboard = ({ onGetWorldChampionsByRange, isLoading, worldChampions, onOpenModal, closeModal, isModalOpen }: Props) => {
  useEffect(() => {
    onGetWorldChampionsByRange()
  }, [])

  const renderContent = () => {
    return worldChampions.length ? (
      <WorldChampionsList worldChampions={worldChampions} onOpenModal={onOpenModal} />
    ) : (
      <StateContainer>
        <StateText>No data...</StateText>
      </StateContainer>
    )
  }

  return (
    <Container>
      <TitleWrapper>
        <TitleText>F1 WORLD CHAMPIONS</TitleText>
        <SubTitleText>Seasons 2005 - 2015</SubTitleText>
      </TitleWrapper>
      {
        isLoading ? (
          <StateContainer>
            <StateText>Loading...</StateText>
          </StateContainer>
        ) : renderContent()
      }
      {isModalOpen && <Modal closeModal={closeModal} />}
    </Container>
  )
}

export default Dashboard

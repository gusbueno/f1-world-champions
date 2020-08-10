import React from 'react'

import { Props } from './Modal.types'
import {
  GlobalStyle,
  Container,
  Content,
  Footer
} from './Modal.styles'
import SeasonDetail from '../../../SeasonDetail'
import Button from '../../../UI/Button'

const Modal = ({ closeModal }: Props) => {
  return (
    <>
      <GlobalStyle />
      <Container data-testid="modal-container" onClick={closeModal}>
        <Content onClick={e => e.stopPropagation()}>
          <SeasonDetail />
          <Footer>
            <Button isFluid onClick={closeModal}>Close</Button>
          </Footer>
        </Content>
      </Container>
    </>
  )
}

export default Modal

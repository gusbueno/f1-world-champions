import React from 'react'

import {
  GlobalStyle,
  Container
} from './Modal.styles'
import SeasonDetail from '../../../SeasonDetail'

const Modal = () => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <SeasonDetail />
      </Container>
    </>
  )
}

export default Modal

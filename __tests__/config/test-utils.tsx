import React from 'react'
import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store'
import { render as rtlRender } from '@testing-library/react'
import { Provider } from 'react-redux'

import storeInitialState from '../../src/store'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

type Props = {
  children: React.ReactNode
}

function render(
  ui: JSX.Element,
  {
    initialState = storeInitialState,
    store = mockStore(initialState),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }: Props) {
    return (
      <Provider store={store}>
        {children}
      </Provider>
    )
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}

// re-export everything
export * from '@testing-library/react'

// override render method
export { render }

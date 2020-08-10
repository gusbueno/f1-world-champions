import React from 'react'
import { render, cleanup } from '../config/test-utils'
import Dashboard from '../../src/Dashboard'
import storeInitialState from '../../src/store'

describe('Dashboard component', () => {
  afterEach(() => {
    cleanup()
  })

  test('should render dashboard', () => {
    const { getByTestId } = render(<Dashboard />)
    expect(getByTestId('dashboard-container')).toBeDefined()
    expect(getByTestId('no-data-container')).toBeDefined()
  })

  test('should render loading', () => {
    const { getByTestId } = render(<Dashboard />, {
      initialState: {
        ...storeInitialState,
        dashboard: {
          ...storeInitialState.dashboard,
          isLoading: true
        }
      }
    })
    expect(getByTestId('loading-container')).toBeDefined()
  })

  test('should render no data', () => {
    const { getByTestId } = render(<Dashboard />)
    expect(getByTestId('no-data-container')).toBeDefined()
  })

  test('should render 2 world champions rows', () => {
    const { getAllByTestId } = render(<Dashboard />, {
      initialState: {
        ...storeInitialState,
        dashboard: {
          ...storeInitialState.dashboard,
          worldChampions: [{
            driverId: 'alonso',
            season: 2005,
            championFullName: 'Fernando Alonso',
            points: 133
          }, {
            driverId: 'hamilton',
            season: 2015,
            championFullName: 'Lewis Hamilton',
            points: 381
          }]
        }
      }
    })

    expect(getAllByTestId('world-champion-info').length).toBe(2)
  })

  test('should render modal', () => {
    const { getByTestId } = render(<Dashboard />, {
      initialState: {
        ...storeInitialState,
        dashboard: {
          ...storeInitialState.dashboard,
          modal: {
            isOpen: true
          }
        }
      }
    })

    expect(getByTestId('modal-container')).toBeDefined()
  })
})

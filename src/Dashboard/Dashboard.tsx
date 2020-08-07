import React, { useEffect } from 'react'

import { Props } from './Dashboard.types'

const Dashboard = ({ onGetWorldChampionsByRange }: Props) => {
  useEffect(() => {
    onGetWorldChampionsByRange()
  }, [])

  return (
    <h1>Dashboard</h1>
  )
}

export default Dashboard

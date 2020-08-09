import { combineReducers } from 'redux'

import dashboard from './Dashboard/Dashboard.reducer'
import seasonDetail from './SeasonDetail/SeasonDetail.reducer'

const rootReducer = () => combineReducers({
  dashboard,
  seasonDetail
})

export default rootReducer

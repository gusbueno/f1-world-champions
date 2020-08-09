import  { connect } from 'react-redux'

import { mapStateToProps, mapDispatchToProps } from './SeasonDetail.connector'
import SeasonDetail from './SeasonDetail'

export default connect(mapStateToProps, mapDispatchToProps)(SeasonDetail)

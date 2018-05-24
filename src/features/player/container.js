import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import Player from './index'

import makeSelectPlayer from './selector'

const mapStateToProps = createStructuredSelector({
  position: makeSelectPlayer('position')
})

export default connect(mapStateToProps)(Player)

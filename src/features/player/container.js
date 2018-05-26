import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import Player from './index'

import { movePlayer } from './actions'
import makeSelectPlayer from './selector'

const mapStateToProps = createStructuredSelector({
  position: makeSelectPlayer('position')
})

const mapDispatchToProps = {
  movePlayer
}

export default connect(mapStateToProps, mapDispatchToProps)(Player)

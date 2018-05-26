import React from 'react'
import { array } from 'prop-types'

import handleMovement from './movement'
import walkSprite from './player_walk.png'

const Player = ({ position: [left, top] }) => (
  <div
    style={{
      position: 'absolute',
      top,
      left,
      backgroundImage: `url('${walkSprite}')`,
      backgroundPosition: '0 0',
      width: '40px',
      height: '40px'
    }}
  />
)

Player.propTypes = {
  position: array.isRequired
}

export default handleMovement(Player)

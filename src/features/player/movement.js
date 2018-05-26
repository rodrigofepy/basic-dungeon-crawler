import React, { Component } from 'react'

import { SPRITE_SIZE } from '../../config/constants'
import { switchcaseF } from '../../utils/switchcase'

function handleMovement(PlayerComponent) {
  return class extends Component {
    componentDidMount() {
      window.addEventListener('keydown', this.eventListener)
    }

    componentWillUnmount() {
      window.removeEventListener('keydown', this.eventListener)
    }

    eventListener = e => {
      this.handleKeyDown(e)
    }

    dispatchMove(direction) {
      const {
        position: [left, top],
        movePlayer
      } = this.props

      const getNewPosition = switchcaseF({
        WEST: () => [left - SPRITE_SIZE, top],
        EAST: () => [left + SPRITE_SIZE, top],
        NORTH: () => [left, top - SPRITE_SIZE],
        SOUTH: () => [left, top + SPRITE_SIZE]
      })([left, top])

      movePlayer(getNewPosition(direction))
    }

    handleKeyDown(e) {
      switch (e.keyCode) {
        case 37:
          this.dispatchMove('WEST')
          break

        case 38:
          e.preventDefault()
          this.dispatchMove('NORTH')
          break

        case 39:
          this.dispatchMove('EAST')
          break

        case 40:
          e.preventDefault()
          this.dispatchMove('SOUTH')
          break
      }
    }

    render() {
      return <PlayerComponent {...this.props} />
    }
  }
}

export default handleMovement

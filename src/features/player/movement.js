import React, { Component } from 'react'

import { MAP_HEIGHT, MAP_WIDTH, SPRITE_SIZE } from '../../config/constants'
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

      movePlayer(
        this.observeBoundaries(this.props.position, getNewPosition(direction))
      )
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

    observeBoundaries(oldPos, newPos) {
      return newPos[0] >= 0 &&
        newPos[0] <= MAP_WIDTH &&
        (newPos[1] >= 0 && newPos[1] <= MAP_HEIGHT)
        ? newPos
        : oldPos
    }

    render() {
      return <PlayerComponent {...this.props} />
    }
  }
}

export default handleMovement

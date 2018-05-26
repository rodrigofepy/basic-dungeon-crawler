import { SPRITE_SIZE } from '../../config/constants'
import { switchcaseF } from '../../utils/switchcase'

const handleMovement = player => (props, ...rest) => {
  console.log('created')

  const {
    position: [left, top],
    movePlayer
  } = props

  const getNewPosition = switchcaseF({
    WEST: () => [left - SPRITE_SIZE, top],
    EAST: () => [left + SPRITE_SIZE, top],
    NORTH: () => [left, top - SPRITE_SIZE],
    SOUTH: () => [left, top + SPRITE_SIZE]
  })([left, top])

  window.addEventListener('keydown', e => {
    handleKeyDown(e)
  })

  return null

  // Return player component and pass down the props
  // return player(props, ...rest)

  // ###################### Methods ##############################3

  function dispatchMove(direction) {
    console.log('dispatching movement')
    movePlayer(getNewPosition(direction))
  }

  function handleKeyDown(e) {
    switch (e.keyCode) {
      case 37:
        dispatchMove('WEST')
        break

      case 38:
        e.preventDefault()
        dispatchMove('NORTH')
        break

      case 39:
        dispatchMove('EAST')
        break

      case 40:
        e.preventDefault()
        dispatchMove('SOUTH')
        break
    }
  }
}

export default handleMovement

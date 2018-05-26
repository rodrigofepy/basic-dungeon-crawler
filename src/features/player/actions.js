import { MOVE_PLAYER } from './constants'

export function movePlayer(position) {
  return {
    type: MOVE_PLAYER,
    payload: {
      position
    }
  }
}

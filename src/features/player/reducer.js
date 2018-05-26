import { MOVE_PLAYER } from './constants'

const initialState = {
  position: [0, 0]
}

export default function playerReducer(state = initialState, action) {
  switch (action.type) {
    case MOVE_PLAYER:
      return { ...state, ...action.payload }

    default:
      return state
  }
}

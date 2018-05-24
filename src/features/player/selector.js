import { createSelector } from 'reselect'

const selectPlayer = state => state.player

export default function makeSelectPlayer(attribute) {
  return createSelector(selectPlayer, playerState => playerState[attribute])
}

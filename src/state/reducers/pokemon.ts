import { ACTION_TYPES, ACTION_TYPES_TS, pokemonType } from '../../types'

const initialState: pokemonType = {
  name: undefined,
  uri: undefined,
  stats: undefined,
  moves: undefined,
}

export const pokemonReducer = (state = initialState, action: ACTION_TYPES_TS): pokemonType => {
  switch (action.type) {
    case ACTION_TYPES.SET_POKEMON:
      return {
        moves: action.payload.moves,
        uri: action.payload.uri,
        stats: action.payload.stats,
        name: action.payload.name,
      }
    default:
      return state
  }
}

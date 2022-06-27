import { ACTION_TYPES, ACTION_TYPES_TS, pokemonsListType } from '../../types'

const initialState: pokemonsListType = {
  next: null,
  previous: null,
  results: null,
  isOpenPokemon: false,
}

export const pokemonsListReducer = (
  state = initialState,
  action: ACTION_TYPES_TS,
): pokemonsListType => {
  switch (action.type) {
    case ACTION_TYPES.SET_POKEMONS_LIST:
      return {
        ...state,
        results: action.payload.results,
        next: action.payload.next,
        previous: action.payload.previous,
      }
    case ACTION_TYPES.TOGGLE_POKEMON_OPEN:
      return {
        ...state,
        isOpenPokemon: action.payload.isOpenPokemon,
      }
    default:
      return state
  }
}

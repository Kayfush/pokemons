import { ACTION_TYPES, pokemonType } from '../../types'

export const setPokemon = ({ name, uri, stats, moves }: pokemonType) => ({
  type: ACTION_TYPES.SET_POKEMON,
  payload: {
    name,
    uri,
    stats,
    moves,
  },
})

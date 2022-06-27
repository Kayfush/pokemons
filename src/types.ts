export type pokemonType = {
  name: string | undefined
  uri: string | undefined
  stats: { base_stat: number; effort: number; stat: { name: string } }[] | undefined
  moves: { move: { name: string } }[] | undefined
}

export type pokemonsListType = {
  isOpenPokemon: boolean
  next: string | null
  previous: string | null
  results: { name: string; url: string }[] | null
}

export type appType = {
  search: string
  spinnerActive: boolean
  sortList: null | {
    next: string | null
    previous: string | null
    results: { name: string; url: string }[] | null
  }
}

export type sortListType = null | {
  next: string | null
  previous: string | null
  results: { name: string; url: string }[] | null
}

export const ACTION_TYPES = {
  SET_POKEMON: 'SET_POKEMON',
  TOGGLE_POKEMON_OPEN: 'TOGGLE_POKEMON_OPEN',
  SET_SORT_LIST: 'SET_SORT_LIST',
  TOGGLE_SPINNER: 'TOGGLE_SPINNER',
  SET_SEARCH: 'SET_SEARCH',
  SET_SORT_IS_OPEN: 'SET_SORT_IS_OPEN',
  SET_POKEMONS_LIST: 'SET_POKEMONS_LIST',
}

export type ACTION_TYPES_TS = {
  type: string
  payload: {
    search: string
    next: string | null
    previous: string | null
    results: { name: string; url: string }[] | null
    name: string | undefined
    uri: string | undefined
    stats: { base_stat: number; effort: number; stat: { name: string } }[] | undefined
    moves: { move: { name: string } }[] | undefined
    isOpenPokemon: boolean
    spinnerActive: boolean
    sortList: {
      next: string | null
      previous: string | null
      results: { name: string; url: string }[] | null
    }
  }
}

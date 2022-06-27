import { getPokemonListOrPokemon } from '../../api/getPokemons'
import { setPokemon } from './pokemon'
import { ACTION_TYPES } from '../../types'
import { toggleSpinner } from './app'
import axios from 'axios'

export const uploadPokemons: any = (str: string) => async (dispatch: any) => {
  dispatch(toggleSpinner(true))
  let res

  if (str) {
    res = await axios
      .get(str)
      .then((res) => res)
      .finally(() =>
        setTimeout(() => {
          dispatch(toggleSpinner(false))
        }, 1000),
      )
  } else {
    res = await getPokemonListOrPokemon().finally(() =>
      setTimeout(() => {
        dispatch(toggleSpinner(false))
      }, 1000),
    )
  }

  dispatch(setPokemonsList(res.data))
}

export const openPokemonAsync: any = (str: string) => async (dispatch: any) => {
  const res = await axios.get(str).then((res) => res)

  dispatch(
    setPokemon({
      stats: res.data.stats,
      moves: res.data.moves,
      name: res.data.name,
      uri: res.data.sprites.front_default,
    }),
  )
}

export const searchPokemon: any = (str: string) => async (dispatch: any) => {
  dispatch(toggleSpinner(true))

  const res = await getPokemonListOrPokemon(str).finally(() =>
    setTimeout(() => {
      dispatch(toggleSpinner(false))
    }, 500),
  )

  if (res.data === 'Not Found') {
    dispatch(setPokemonsList({ next: null, previous: null, results: null }))
    dispatch(
      setPokemon({
        stats: undefined,
        moves: undefined,
        name: undefined,
        uri: undefined,
      }),
    )

    return true
  }

  if (res.data.results) {
    dispatch(setPokemonsList(res.data))
    dispatch(
      setPokemon({
        stats: undefined,
        moves: undefined,
        name: undefined,
        uri: undefined,
      }),
    )

    return true
  }

  dispatch(setPokemonsList({ next: null, previous: null, results: null }))
  dispatch(
    setPokemon({
      stats: res.data.stats,
      moves: res.data.moves,
      name: res.data.name,
      uri: res.data.sprites.front_default,
    }),
  )
}

export const setPokemonsList: any = ({ next, previous, results }: any) => ({
  type: ACTION_TYPES.SET_POKEMONS_LIST,
  payload: {
    next,
    previous,
    results,
  },
})

export const togglePokemonOpen: any = (isOpen: boolean) => ({
  type: ACTION_TYPES.TOGGLE_POKEMON_OPEN,
  payload: {
    isOpenPokemon: isOpen,
  },
})

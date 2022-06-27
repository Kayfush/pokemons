import { ACTION_TYPES, sortListType } from '../../types'
import { getPokemonTypesListOrType } from '../../api/getPokemons'
import { setPokemonsList } from './pokemonsList'
import axios from 'axios'

export const setSearch = (search: string) => ({
  type: ACTION_TYPES.SET_SEARCH,
  payload: {
    search,
  },
})

export const setSortList = (obj: sortListType) => ({
  type: ACTION_TYPES.SET_SORT_LIST,
  payload: {
    sortList: obj,
  },
})

export const toggleSpinner = (bool: boolean) => ({
  type: ACTION_TYPES.TOGGLE_SPINNER,
  payload: {
    spinnerActive: bool,
  },
})

export const uploadPokemonTypes: any = () => async (dispatch: any) => {
  const res = await getPokemonTypesListOrType()

  dispatch(setSortList(res.data))
}

export const uploadPokemonTypeList: any = (str: string) => async (dispatch: any) => {
  const res = await axios.get(str).then((res) => res)
  const arr = res.data.pokemon.map(
    (item: { pokemon: { name: string; url: string; uri: string } }) => {
      return item.pokemon
    },
  )

  dispatch(
    setPokemonsList({
      next: null,
      previous: null,
      results: arr,
    }),
  )
}

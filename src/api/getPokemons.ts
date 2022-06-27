import axios from './index'

export const getPokemonListOrPokemon = async (str?: string) =>
  await axios
    .get(`pokemon${str ? '/' + str : ''}`)
    .then((response) => response)
    .catch(({ response }) => {
      console.log(response)

      return response
    })

export const getPokemonTypesListOrType = async (num?: number) =>
  await axios
    .get(`type${num ? '/' + num : ''}`)
    .then((response) => response)
    .catch(({ response }) => {
      console.log(response)

      return response
    })

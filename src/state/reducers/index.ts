import { combineReducers } from 'redux'
import { pokemonReducer } from './pokemon'
import { pokemonsListReducer } from './pokemonsList'
import { appReducer } from './app'

export const rootReducer = combineReducers({
  pokemon: pokemonReducer,
  pokemonsList: pokemonsListReducer,
  app: appReducer,
})

export type RootState = ReturnType<typeof rootReducer>

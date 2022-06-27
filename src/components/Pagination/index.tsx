import React, { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { uploadPokemons } from '../../state/actions/pokemonsList'
import { RootState } from '../../state/reducers'
import { ButtonGroup, Button } from 'react-bootstrap'
import './Pagination.scss'

export const Pagination: FC = () => {
  const { next, previous } = useSelector((store: RootState) => store.pokemonsList)
  const dispatch = useDispatch()

  return (
    <div className='d-flex justify-content-center wrapper'>
      <ButtonGroup size='lg' className='mt-2'>
        {previous !== null && (
          <Button
            onClick={() => {
              dispatch(uploadPokemons(previous))
            }}
          >
            previous
          </Button>
        )}
        {next !== null && (
          <Button
            onClick={() => {
              dispatch(uploadPokemons(next))
            }}
          >
            next
          </Button>
        )}
      </ButtonGroup>
    </div>
  )
}

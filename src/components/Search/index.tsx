import React, { FC, useEffect, ChangeEvent } from 'react'
import { Form, Container, Col, Button, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { searchPokemon, uploadPokemons } from '../../state/actions/pokemonsList'
import { setSearch } from '../../state/actions/app'
import { RootState } from '../../state/reducers'
import { Sort } from '../Sort'
import { setPokemon } from '../../state/actions/pokemon'

export const Search: FC = () => {
  const { search } = useSelector((store: RootState) => store.app)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(uploadPokemons())
  }, [])

  const searchChangeField = (event: ChangeEvent<HTMLInputElement>) =>
    dispatch(setSearch(event.target.value))

  const submitForm = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault()

    dispatch(setPokemon({ name: undefined, uri: undefined, stats: undefined, moves: undefined }))
    dispatch(searchPokemon(search))
  }

  return (
    <Container>
      <Form className='mt-2' onSubmit={submitForm}>
        <Row className='align-items-center'>
          <Col sm={10} className='my-1'>
            <Form.Control
              placeholder='Search pokemon'
              type='text'
              value={search}
              onChange={searchChangeField}
            />
          </Col>
          <Col sm={1} className='my-1'>
            <Button className='search_btn' type='submit'>
              Search
            </Button>
          </Col>
          <Col sm={1} className='my-1'>
            <Sort />
          </Col>
        </Row>
      </Form>
    </Container>
  )
}

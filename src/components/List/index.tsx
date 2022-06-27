import React, { FC, useEffect } from 'react'
import { Container, Row, Col, Card, Alert, Spinner } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import {
  openPokemonAsync,
  togglePokemonOpen,
  uploadPokemons,
} from '../../state/actions/pokemonsList'
import { Pokemon } from '../Pokemon'
import { RootState } from '../../state/reducers'

export const List: FC = () => {
  const { results, isOpenPokemon } = useSelector((store: RootState) => store.pokemonsList)
  const { name } = useSelector((store: RootState) => store.pokemon)
  const { search } = useSelector((store: RootState) => store.app)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(uploadPokemons())
  }, [])

  const openPokemon = (url: string, itemName: string) => {
    if (itemName !== name) {
      dispatch(openPokemonAsync(url))
      dispatch(togglePokemonOpen(true))

      return
    }

    dispatch(togglePokemonOpen(!isOpenPokemon))
  }

  return (
    <Container className='mt-2'>
      <Row>
        <Col xs={12}>
          {results !== null && (
            <Card>
              {results.map((item, index: number) => (
                <div key={`${item.name}-${item.url}-${index}`}>
                  <Card.Header onClick={() => openPokemon(item.url, item.name)}>
                    <h5>{item.name}</h5>
                  </Card.Header>

                  <Card.Body>{item.name === name && isOpenPokemon && <Pokemon />}</Card.Body>
                </div>
              ))}
            </Card>
          )}

          {results === null && name === undefined && search.length > 0 && (
            <Alert variant='danger'>Not found</Alert>
          )}
        </Col>
      </Row>
    </Container>
  )
}

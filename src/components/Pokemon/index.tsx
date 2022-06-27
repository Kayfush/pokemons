import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../state/reducers'
import { Col, Row, ProgressBar, Card, ListGroup, Container } from 'react-bootstrap'

export const Pokemon: FC = () => {
  const { name, uri, stats, moves } = useSelector((store: RootState) => store.pokemon)

  return (
    <Container>
      <Row>
        <Col xs={12} md={6}>
          {name !== undefined && <h5>{name}</h5>}
          {uri !== undefined && (
            <div>
              <img className='pokemon_img' src={uri} alt={name} />
            </div>
          )}
          {stats !== undefined && (
            <Card.Body>
              <h4>Base Stats</h4>
              {stats.map((item, index: number) => (
                <div key={`${item.stat.name}-${item.base_stat}-${index}`}>
                  <strong>{item.stat.name}</strong>
                  <ProgressBar now={item.base_stat} max={255} label={item.base_stat} />
                </div>
              ))}
            </Card.Body>
          )}
        </Col>
        <Col xs={12} md={6}>
          {moves !== undefined && (
            <Card.Body>
              <h4>Moves</h4>
              <ListGroup horizontal>
                {moves.map((item, index: number) => (
                  <ListGroup.Item key={`${item.move.name}-${index}`}>
                    {item.move.name}
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Card.Body>
          )}
        </Col>
      </Row>
    </Container>
  )
}

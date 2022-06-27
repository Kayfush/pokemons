import React, { FC } from 'react'
import { Spinner } from 'react-bootstrap'
import { Pokemon } from './components/Pokemon'
import { useSelector } from 'react-redux'
import { Search } from './components/Search'
import { List } from './components/List'
import { Pagination } from './components/Pagination'
import { RootState } from './state/reducers'

export const App: FC = () => {
  const { search, spinnerActive } = useSelector((store: RootState) => store.app)

  return (
    <>
      <Search />

      <List />

      <Pagination />

      <div className={`spinner ${!spinnerActive && 'spinnerDisabled'}`}>
        <Spinner animation='border' />
      </div>

      {search !== '' && <Pokemon />}
    </>
  )
}

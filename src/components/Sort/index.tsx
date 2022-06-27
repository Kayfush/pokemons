import React, { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../state/reducers'
import { uploadPokemonTypeList, uploadPokemonTypes } from '../../state/actions/app'
import { DropdownButton, Dropdown } from 'react-bootstrap'

export const Sort: FC = () => {
  const { sortList } = useSelector((store: RootState) => store.app)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(uploadPokemonTypes())
  }, [])

  const openType = (url: string) => {
    dispatch(uploadPokemonTypeList(url))
  }

  return (
    <DropdownButton title='sort'>
      {sortList !== null &&
        sortList.results !== null &&
        sortList.results.map((item, index: number) => (
          <div key={`${item.name}-${index}-type`}>
            <Dropdown.Item className='sort_btn' onClick={() => openType(item.url)}>
              {item.name}
            </Dropdown.Item>
          </div>
        ))}
    </DropdownButton>
  )
}

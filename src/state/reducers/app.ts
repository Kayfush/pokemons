import { ACTION_TYPES, ACTION_TYPES_TS, appType } from '../../types'

const initialState: appType = {
  search: '',
  sortList: null,
  spinnerActive: false,
}

export const appReducer = (state = initialState, action: ACTION_TYPES_TS): appType => {
  switch (action.type) {
    case ACTION_TYPES.SET_SEARCH:
      return { ...state, search: action.payload.search }
    case ACTION_TYPES.SET_SORT_LIST:
      return { ...state, sortList: action.payload.sortList }
    case ACTION_TYPES.TOGGLE_SPINNER:
      return { ...state, spinnerActive: action.payload.spinnerActive }
    default:
      return state
  }
}

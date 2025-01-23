export type BudgetActions =
  | { type: 'ADD_BUDGET'; payload: { budget: number } }
  | { type: 'OPEN_MODAL'; payload?: null }
  | { type: 'CLOSE_MODAL'; payload?: null }

export type BudgetState = {
  budget: number | null
  modal: boolean
}

export const initialState: BudgetState = {
  budget: 0,
  modal: false
}

export const budgetReducer = (
  state: BudgetState = initialState,
  action: BudgetActions
) => {
  const { type, payload } = action
  if (type == 'ADD_BUDGET') {
    return {
      ...state,
      budget: payload.budget
    }
  }
  if (type == 'OPEN_MODAL') {
    return {
      ...state,
      modal: true
    }
  }
  if (type == 'CLOSE_MODAL') {
    return {
      ...state,
      modal: false
    }
  }
  return state
}

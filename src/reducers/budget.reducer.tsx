export type BudgetActions = { type: 'ADD_BUDGET'; payload: { budget: number } }

export type BudgetState = {
  budget: number | null
}

export const initialState: BudgetState = {
  budget: 0
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
  return state
}

import { createContext, useReducer } from 'react'
import {
  BudgetActions,
  budgetReducer,
  BudgetState,
  initialState
} from '@/reducers/budget.reducer'

type BudgetContextProps = {
  state: BudgetState
  dispatch: React.Dispatch<BudgetActions>
}

export const budgetContext = createContext<BudgetContextProps>(null!)

type BudgetProviderProps = {
  children: React.ReactNode
}

export function BudgetProvider({ children }: BudgetProviderProps) {
  const [state, dispatch] = useReducer(budgetReducer, initialState)
  return (
    <budgetContext.Provider value={{ state, dispatch }}>
      {children}
    </budgetContext.Provider>
  )
}

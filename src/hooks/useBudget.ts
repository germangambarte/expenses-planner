import { budgetContext } from '@/context/budget.context'
import { useContext } from 'react'

export const useBudget = () => {
  const context = useContext(budgetContext)
  if (!context) {
    throw new Error('useBudget must be used within a BudgetProvider')
  }
  return context
}

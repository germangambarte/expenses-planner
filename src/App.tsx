import BudgetForm from '@/components/BudgetForm'
import { useBudget } from './hooks/useBudget'
import { useMemo } from 'react'
import { BudgetTracker } from '@/components/BudgetTracker'
import { ExpenseModal } from './components/ExpenseModal'

function App() {
  const { state } = useBudget()

  const isValidBudget = useMemo(() => {
    return state.budget && state.budget > 0
  }, [state.budget])
  return (
    <>
      <header className="py-8 max-h-72">
        <h1 className="text-center font-bold text-4xl">
          Planificador de Gastos
        </h1>
      </header>
      {isValidBudget
        ? (
          <>
            <BudgetTracker />
            <ExpenseModal />
          </>
        )
        : <BudgetForm />
      }
    </>
  )
}

export default App

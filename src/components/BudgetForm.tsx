import { useBudget } from '@/hooks/useBudget'
import { useMemo, useState } from 'react'

export default function BudgetForm() {
  const [budget, setBudget] = useState<number | null>(null)
  const { dispatch } = useBudget()

  function handleChange(evt: React.ChangeEvent<HTMLInputElement>) {
    const value = !Number.isNaN(evt.target.valueAsNumber)
      ? evt.target.valueAsNumber
      : null
    setBudget(value)
  }

  function handleSubmit(evt: React.FormEvent<HTMLFormElement>) {
    evt.preventDefault()
    dispatch({ type: 'ADD_BUDGET', payload: { budget: budget! } })
  }

  const isValidBudget = useMemo(() => {
    return Number.isNaN(budget) || budget
  }, [budget])

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="flex flex-col space-y-5">
        <label htmlFor="budget" className="text-xl font-bold">
          Definir Presupuesto:
        </label>
        <input
          id="budget"
          type="number"
          className="w-full border-2 p-2 pl-4 font-bold outline-none bg-light border-dark rounded-full
          placeholder:text-dark placeholder:opacity-40
          dark:bg-dark dark:border-light dark:placeholder:text-light dark:placeholder:opacity-40
          "
          placeholder="Define to presupuesto"
          name="budget"
          onChange={handleChange}
          value={budget ?? ''}
        />
      </div>
      <input
        type="submit"
        value="Comenzar"
        className="mx-auto block border-4 rounded-full px-8 py-1 font-bold bg-dark text-light border-dark cursor-pointer
        hover:bg-light hover:text-dark 
        dark:bg-light dark:text-dark dark:border-light 
        dark:hover:bg-dark dark:hover:text-light
        disabled:opacity-40 disabled:cursor-default disabled:hover:bg-dark disabled:hover:text-light
        dark:disabled:bg-light dark:disabled:text-dark dark:disabled:hover:text-dark dark:disabled:hover:bg-light
        "
        disabled={!isValidBudget}
      />
    </form>
  )
}

import { useBudget } from '@/hooks/useBudget'
import { useMemo, useState } from 'react'

export default function BudgetForm() {
  const [budget, setBudget] = useState<number | null>(null)
  const { dispatch } = useBudget()

  function handleChange(evt: React.ChangeEvent<HTMLInputElement>) {
    const value = Number.isNaN(evt.target.valueAsNumber)
      ? null
      : evt.target.valueAsNumber
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
    <form className="pt-40 flex flex-col justify-center items-center gap-20" onSubmit={handleSubmit}>
      <label htmlFor="budget" className="text-xl text-center font-bold">
        Definir Presupuesto
      </label>
      <input
        className=" max-w-xl text-center border-b-2 border-light/40 text-accent text-7xl p-2 font-bold outline-none bg-light 
        placeholder:text-dark placeholder:opacity-40
        dark:bg-dark dark:placeholder:text-light dark:placeholder:opacity-40
        [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none
        "
        autoComplete='off'
        type='number'
        id="budget"
        name="budget"
        placeholder="0"
        value={budget ?? ''}
        onChange={handleChange}
      />
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

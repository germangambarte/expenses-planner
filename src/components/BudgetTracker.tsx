import { useBudget } from "@/hooks/useBudget"
import { ExpenseDisplay } from "./ExpenseDisplay"
import { formatCurrency } from "@/utils"

export function BudgetTracker() {
  const { state } = useBudget()
  return (
    <div className="max-w-2xl mx-auto">
      <span className="text-center block pt-16 pb-4 text-sm text-light/60">Gastado hasta el momento</span>
      <h1 className="text-center font-bold text-6xl sm:text-8xl text-accent pb-16">{formatCurrency(state.budget!)}</h1>

      <div className="space-y-5">
        <ExpenseDisplay amount={100} label="Gas" />
        <ExpenseDisplay amount={100} label="Gas" />
        <ExpenseDisplay amount={100} label="Gas" />
        <ExpenseDisplay amount={100} label="Gas" />
      </div>
    </div>
  )
}

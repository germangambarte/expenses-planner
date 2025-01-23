import { formatCurrency } from "@/utils"

type Props = {
  amount: number
  label: string
}
export function ExpenseDisplay({ amount, label }: Props) {
  return (
    <div className="h-16 p-2 flex gap-2 items-center cursor-pointer rounded-xl hover:bg-accent/20">
      <span className="text-2xl px-4">⛽</span>
      <p className="w-full">{label}</p>
      <p className="pr-4">{formatCurrency(amount)}</p>
    </div>
  )
}

import BudgetForm from '@/components/BudgetForm'

function App() {
  return (
    <>
      <header className="py-8 max-h-72">
        <h1 className="text-center font-bold text-4xl">
          Planificador de Gastos
        </h1>
      </header>
      <div className="max-w-2xl mx-auto rounded-lg p-6 border-2 border-dark dark:border-light">
        <BudgetForm />
      </div>
    </>
  )
}

export default App

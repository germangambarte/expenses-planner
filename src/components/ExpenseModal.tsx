import { useBudget } from '@/hooks/useBudget';
import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { FaPlus } from "react-icons/fa6";

export function ExpenseModal() {
  const { state, dispatch } = useBudget()
  return (
    <>
      <Button
        onClick={() => dispatch({ type: "OPEN_MODAL" })}
        className="rounded-full bg-accent p-3 text-3xl fixed right-8 bottom-8"
      >
        <FaPlus />
      </Button>

      <Dialog open={state.modal}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={() => dispatch({ type: "CLOSE_MODAL" })}>
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto backdrop-blur-sm">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-md rounded-xl border-2 border-light p-6 duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
              <DialogTitle as="h3" className="text-base/7 font-medium text-center text-white pb-4">
                Añadir nuevo gasto
              </DialogTitle>
              <form className='flex flex-col justify-center items-center gap-8'>
                <input
                  className="w-60 text-center border-b-2 border-light/40 text-accent text-4xl p-2 font-bold outline-none bg-light 
                  placeholder:text-dark placeholder:opacity-40
                  dark:bg-dark dark:placeholder:text-light dark:placeholder:opacity-40
                  [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none
                  "
                  id="spent"
                  type="number"
                  placeholder="ej: 325"
                  name="spent"
                />
                <select 
                className='bg-dark outline-none w-60 p2'
                name="category" id='category'>
                  <option className='outline-none' value="gas">⛽ Combustible</option>
                  <option value="food">🍔 Comida</option>
                  <option value="shop">🛍️ Compras</option>
                </select>

                <Button
                  className="block mx-auto bg-accent border-2 border-accent text-dark px-4 py-1 rounded-full hover:bg-dark hover:text-accent font-bold"
                  onClick={() => dispatch({ type: "CLOSE_MODAL" })}
                >
                  Agregar gasto
                </Button>
              </form>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  )
}

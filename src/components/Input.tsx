
interface Props extends React.HTMLAttributes<HTMLInputElement> {
  label: string
  name: string
  placeholder: string
  type: React.HTMLInputTypeAttribute
  value: any
}
export function Input({ label, name, value, placeholder, type, ...props }: Props) {
  return (
    <>
      <label htmlFor={name} className="text-md font-bold">{label}</label>
      <input
        {...props}
        id={name}
        type={type}
        className="w-full border-2 p-2 pl-4 font-bold outline-none bg-light border-dark rounded-full
          placeholder:text-dark placeholder:opacity-40
          dark:bg-dark dark:border-light dark:placeholder:text-light dark:placeholder:opacity-40
          "
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={props.onChange}
      />
    </>
  )
}

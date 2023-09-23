const RegisterButton = ({text}) => {
  return (
    <button
      type="button"
      className="inline-block rounded w-40 px-6 py-4 text-base font-medium uppercase leading-normal text-white transition duration-150 ease-in-out
      bg-gradient-1"
    >
      {text}
    </button>
  )
}

export default RegisterButton
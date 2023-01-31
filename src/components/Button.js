
export function Button ({ text }) {
  return (
    <button
      className='w-36 rounded-full text-xl text-primary shadow-sm font-semibold p-3 bg-white transition duration-500 ease-in-out hover:bg-primary hover:text-white transform hover:-translate-y-1 hover:scale-110 dark:bg-darkPrimary dark:text-white dark:hover:bg-primary'
    >
      {text}
    </button>
  )
}

export function SearchBar () {
  return (
    <input
      type='search'
      className='w-3/5 p-3 rounded-full shadow-sm outline-none transition-all duration-300 focus-within:shadow-sm focus:ring-2 focus:w-10/12 lg:hidden dark:bg-darkPrimary dark:focus:text-primary dark:ring-primary'
      placeholder='San Francisco'
      name='' id=''
    />
  )
}

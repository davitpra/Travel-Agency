export function Hero () {
  return (
    <article
      // se anade bg-cover para cubrir y bg-fixed para que no se mueva
      className='w-full h-3/4 py-4 my-4 flex flex-col items-center justify-between bg-cover bg-top bg-fixed static'
      // se utiliza Style para traer la imagen xq tailwind me fallo
      style={{ backgroundImage: 'url(\'../img/sanFrancisco.jpg\')' }}
    >
      <input
        type='search'
        className='w-48 p-3 rounded-full shadow-sm outline-none transition-all duration-300 focus-within:shadow-sm focus:ring-2 focus:w-10/12'
        placeholder='San Francisco'
        name='' id=''
      />
      <button
        className='w-36 rounded-full text-xl text-primary shadow-sm font-semibold p-3 bg-white transition duration-500 ease-in-out hover:bg-primary hover:text-white transform hover:-translate-y-1 hover:scale-110'
      >
        Explorar
      </button>
    </article>
  )
}

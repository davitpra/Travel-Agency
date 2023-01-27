export function Hero () {
  return (
    <article
      className='w-full h-3/4 py-4 flex flex-col items-center justify-between bg-cover bg-top bg-fixed static'
      style={{ backgroundImage: 'url(\'../img/sanFrancisco.jpg\')' }}
    >
      <input type='search' className='outline-none p-3 rounded-full shadow-sm' placeholder='San Francisco' name='' id='' />
      <button className='w-36 rounded-full text-xl text-primary shadow-sm font-semibold p-4 bg-white'>Explorar</button>
    </article>
  )
}

import { Button } from '@/components/Button'
import { SearchBar } from '@/components/SearchBar'

export function Hero () {
  return (
    <article
      // se anade bg-cover para cubrir y bg-fixed para que no se mueva
      className='w-full h-3/4 py-4 my-4 flex flex-col items-center space-y-96 bg-cover bg-top bg-fixed static lg:hidden'
      // se utiliza Style para traer la imagen xq tailwind me fallo
      style={{ backgroundImage: 'url(\'../img/sanFrancisco.jpg\')' }}
      id='home'
    >
      <SearchBar />
      <Button text='Explorar' />
    </article>
  )
}

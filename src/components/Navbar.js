import { BsFillMoonFill, BsFillPersonFill, BsSearch } from 'react-icons/bs'

const SIZE = '20px'

export function Navbar () {
  return (
    <nav
      className='w-full h-14 hidden bg-white lg:flex lg:fixed lg:z-10 p-4 justify-between border-b-4 border-cyan-600"'
    >
      <div className='h-auto w-auto'>
        <p className='text-xl text-primary font-black'> Travel Agency </p>
      </div>
      <div className='flex space-x-8'>
        <a className='font-bold text-md hover:text-primary' href='#home'>Inicio</a>
        <a className='font-bold text-md hover:text-primary' href='#recomended'>Recomendados</a>
        <a className='font-bold text-md hover:text-primary' href='#treding'>Rentas</a>
        <a className='font-bold text-md hover:text-primary' href='#FAQs'>FAQs</a>
        <a className='font-bold text-md hover:text-primary' href='#sobre_nosotros'>Sobre nosotros</a>
      </div>
      <div className='flex space-x-4'>
        <a href=''>
          <BsSearch size={SIZE} color='gray' />
        </a>
        <a href=''>
          <BsFillMoonFill size={SIZE} color='gray' />
        </a>
        <a href='./registrationForm.html'>
          <BsFillPersonFill size={SIZE} color='gray' />
        </a>
      </div>
    </nav>
  )
}

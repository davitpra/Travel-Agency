import { AiFillHome, AiFillLike } from 'react-icons/ai'
import { BsFillPersonFill, BsSearch } from 'react-icons/bs'
import { DarkMode } from './DarkMode'

const SIZE = '32px'

export default function TabBar () {
  return (
    <nav
      className='w-full h-auto  bg-white px-6 py-4 flex items-center justify-between space-x-10 fixed left-0 bottom-0 lg:hidden'
    >
      <a href='#home'>
        <AiFillHome size={SIZE} color='gray' />
      </a>
      <a href='#recomended'>
        <AiFillLike size={SIZE} color='gray' />
      </a>
      <a href='#home'>
        <BsFillPersonFill size={SIZE} color='gray' />
      </a>
      <DarkMode />
      <a href='#treding'>
        <BsSearch size={SIZE} color='gray' />
      </a>
    </nav>
  )
}

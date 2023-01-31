import { Button } from '@/components/Button'
import { SearchBar } from '@/components/SearchBar'
import Image from 'next/image'
import sanFranciscoDesktop from '../../public/img/sanFranciscoDesktop.jpg'
import sanFrancisco from '../../public/img/sanFrancisco.jpg'

export function Hero () {
  return (
    <article
      className='w-full h-[40rem] lg:h-[30rem]'
      id='home'
    >
      <div className='hidden h-auto lg:w-2/5 lg:flex p-16 pb-0 pt-24'>
        <p className='text-4xl font-bold text-black'>Encuentra más ubicaciones como esta</p>
      </div>
      <div
        className='flex flex-col items-center justify-evenly space-y-96 py-4 lg:space-y-0 lg:items-start lg:justify-start lg:p-20'
      >
        <SearchBar />
        <Button text='Explorar' />
      </div>

      <Image
        fill
        src={sanFranciscoDesktop}
        alt='San Francisco'
        className='hidden -z-10 object-cover  lg:flex'
        priority
      />
      <Image
        fill
        src={sanFrancisco}
        alt='San Francisco'
        className='-z-10 object-cover lg:hidden'
        priority
      />

    </article>
  )
}

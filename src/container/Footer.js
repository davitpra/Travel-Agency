import { aboutinfo } from 'data/aboutInfo'
import { AboutUs } from '@/components/AboutUs'
import { AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai'

const SIZE = '24px'

export const Footer = () => {
  return (
    <div
      className='w-full h-auto flex-none mx-6 space-y-2'
      id='sobre_nosotros'
    >
      <p
        className='text-lg'
      >Acerca de
      </p>
      {aboutinfo.map(about =>
        <AboutUs {...about} key={about.section} />
      )}
      <div className='flex w-full h-auto justify-start space-x-4 pb-16'>
        <AiOutlineInstagram size={SIZE} color='grey' />
        <AiOutlineTwitter size={SIZE} color='grey' />
      </div>
    </div>
  )
}

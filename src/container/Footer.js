import { aboutinfo } from 'data/aboutInfo'
import { AboutUs } from '@/components/AboutUs'
import { AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai'
import { Title } from '@/components/Title'

const SIZE = '24px'

export const Footer = () => {
  return (
    <div
      className='w-full h-auto flex-none space-y-2 dark:bg-darkPrimary'
      id='sobre_nosotros'
    >
      <Title text='Acerca de' />
      {aboutinfo.map(about =>
        <AboutUs {...about} key={about.section} />
      )}
      <div className='flex w-full h-auto justify-start space-x-4 pb-16 px-6'>
        <AiOutlineInstagram size={SIZE} color='grey' />
        <AiOutlineTwitter size={SIZE} color='grey' />
      </div>
    </div>
  )
}

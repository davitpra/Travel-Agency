import { AboutUs } from '@/components/AboutUs'
import { aboutinfo } from 'data/aboutInfo'

export const Footer = () => {
  return (
    <div className='w-full h-auto flex-none mx-6 space-y-2'>
      <p
        className='text-lg'
      >Acerca de
      </p>
      {aboutinfo.map(about =>
        <AboutUs {...about} key={about} />
      )}
    </div>
  )
}

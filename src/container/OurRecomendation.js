import { CardRecomended } from '@/components/CardRecomended'
import { RecomendationList } from '@/components/RecomendationList'
import { Places } from 'places'

export function OurRecomendation () {
  return (
    <>
      <p className='text-3xl text-primary font-semibold mt-6 ml-4'>
        Recomendados
      </p>
      <RecomendationList>
        {
          Places.map(place => <CardRecomended {...place} key={place.location} />)
        }
      </RecomendationList>
    </>
  )
}

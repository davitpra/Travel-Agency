import { RecomendationCard } from '@/components/RecomendationCard'
import { RecomendationList } from '@/components/RecomendationList'
import { Title } from '@/components/Title'
import { Places } from 'places'

export function OurRecomendation () {
  return (
    <>
      <Title text='Recomendados' />
      <RecomendationList>
        {
          Places.map(place => <RecomendationCard {...place} key={place.location} />)
        }
      </RecomendationList>
    </>
  )
}

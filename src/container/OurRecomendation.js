import { RecomendationCard } from '@/components/RecomendationCard'
import { RecomendationList } from '@/components/RecomendationList'
import { Title } from '@/components/Title'
import { places } from 'data/places'

export function OurRecomendation () {
  return (
    <>
      <Title text='Recomendados' />
      <RecomendationList>
        {
          places.map(place => <RecomendationCard {...place} key={place.location} />)
        }
      </RecomendationList>
    </>
  )
}

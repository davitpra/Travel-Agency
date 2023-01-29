import { Title } from '@/components/Title'
import { TrendingCard } from '@/components/TrendingCard'
import { trending } from 'data/trending'

export function TrendingStays () {
  return (
    <div id='treding'>
      <Title text='Rentas Destacadas' />
      <div
        className='flex m-6 flex-col  justify-center space-y-4 items-center'
      >
        {trending.map(card => <TrendingCard {...card} key={card.name} />)}
      </div>
    </div>
  )
}

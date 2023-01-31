import { Question } from '@/components/Question'
import { Title } from '@/components/Title'
import { faqs } from 'data/faqs'

export function FAQs () {
  return (
    <div
      id='FAQs'
      className='dark:bg-darkPrimary pt-4 pb-4'
    >
      <Title text='FAQs' />
      {faqs.map(ques =>
        <Question {...ques} key={ques.question} />
      )}
    </div>
  )
}

import { Question } from '@/components/Question'
import { Title } from '@/components/Title'
import { faqs } from 'data/faqs'

export function FAQs () {
  return (
    <div id='FAQs'>
      <Title text='FAQs' />
      {faqs.map(ques =>
        <Question {...ques} key={ques.question} />
      )}
    </div>
  )
}

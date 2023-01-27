
export function Question ({ question, answer }) {
  return (
    <div className='m-6'>
      <p
        className='text-lg font-bold text-primary pb-2'
      >
        {question}
      </p>
      <p>
        {answer}
      </p>
    </div>
  )
}

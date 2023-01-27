
export function TrendingCard ({ name, description, path, background }) {
  return (
    <div
      className=' w-full h-96 bg-cover bg-top rounded-xl'
      style={{ backgroundImage: `url('${path}')` }}
    >
      <div
        className='px-8 pt-8 mr-32'
      >
        {
        background
          ? <p className='text-3xl pb-1 font-semibold pt-16 text-white'> {name}</p>
          : <p className='text-3xl pb-1 font-semibold'> {name}</p>
        }
        {
        background
          ? <p className='text-lg font-bold  text-white'>{description}</p>
          : <p className='text-lg font-bold'>{description}</p>
        }
      </div>
    </div>
  )
}

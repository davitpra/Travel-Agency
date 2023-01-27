import React from 'react'

export const CardRecomended = ({ location, country, path }) => {
  return (
    <li
      id='cardRecomended'
      className='w-48 h-64 mx-2 my-6 shadow-md flex rounded-lg bg-cover bg-top items-end shrink-0 justify-start'
      style={{ backgroundImage: `url('${path}')` }}
    >
      <div
        className='bg-white w-4/5 h-1/3 rounded-3xl flex flex-col justify-center items-start m-4'
      >
        <p className='text-terciary font-bold text-l px-4 py-2'>{location}</p>
        <p className='text-terciary text-l px-4'>{country}</p>
      </div>
    </li>
  )
}

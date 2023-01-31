import React from 'react'

export const RecomendationList = ({ children }) => {
  return (
    <ul
      id='recomendationList'
      className='w-auto h-auto items-center flex overflow-x-auto scrollbar-hide lg:scrollbar-default overflow-y-hidden'
    >
      {children}
    </ul>

  )
}

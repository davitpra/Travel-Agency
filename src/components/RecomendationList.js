import React from 'react'

export const RecomendationList = ({ children }) => {
  return (
    <ul
      id='recomendationList'
      className='w-auto h-72 items-center flex overflow-x-auto overscroll-x-contain scrollbar-hide md:scrollbar-default overflow-y-hidden'
    >
      {children}
    </ul>

  )
}

import React from 'react'

const CarCardSkeleton = () => {
  return (
    <div className="flex flex-col gap-4 w-4/5 m-2 md:m-3">
        <div className="skeleton h-[120px] md:h-[200px] w-full"></div>
        <div className="skeleton h-4 w-28"></div>
        <div className="skeleton h-4 w-full"></div>
        <div className="skeleton h-4 w-full"></div>
  </div>
  )
}

export default CarCardSkeleton
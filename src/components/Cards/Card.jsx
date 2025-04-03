import React from 'react'


const Card = ({imagePath,title}) => {
  return (
    <div className='flex flex-col p-8'>
      <img className='h-[260px] w-[240px] bg-cover bg-center 
      border rounded hover:scale-105 cursor-pointer' src={imagePath} alt='Jeans'/>
      <p className='text-[16px] p=[5px]'>{title}</p>
    </div>
  )
}

export default Card
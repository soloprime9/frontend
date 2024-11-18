import React from 'react'

const Card = ({title, description, className}) => {
  return (
    <div>
      <div>
        <div className='m-10 border-2 p-4 rounded-lg'>
            <h1 className='text-2xl font-bold'>{title}</h1>
            <p className={`text-blue-500  ${className}`}>{description}</p>
            <div className='mt-2'>
                <button className='text-lg text-white font-bold bg-blue-500 rounded-lg p-2 mr-5'>Primary</button>
                <button className='text-lg text-white font-bold bg-blue-500 rounded-lg p-2 bg-red-700'>Secondary</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Card

import Card from '@/components/Card'
import Navbar from '@/components/Navbar'

import React from 'react'

const page = () => {
  return (
    <div>
      <div className='m-10 border-2 p-4 rounded-lg'>
      <div>
        <h1 className='text-2xl font-bold'>Title</h1>
        <p className='text-blue-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia iure possimus dolorem saepe esse maiores?</p>
        <div className=' flex m-2'>
        <button className='border-2 bg-blue-500 text-white font-bold p-2 mr-4 rounded-full'>Primary</button>
        <button className='border-2 bg-red-500 text-white font-bold p-2 rounded-full'>Secondary</button>
        </div>
      </div>

      
      </div>

      <Card className="text-blue m-4" title="Title 1" description="This will be the Frist Title for the Description" />

      <Card className="text-blue m-4" title="Title 2" description="This will be the Frist Title for the Description" />

      <Card className="text-blue m-4" title="Title 3" description="This will be the Frist Title for the Description" />

      <Card className="text-blue m-4" title="Title 4" description="This will be the Frist Title for the Description" />

      <Card className="text-blue m-4" title="Title 5" description="This will be the Frist Title for the Description" />

      <Navbar />
    </div>
  )
}

export default page

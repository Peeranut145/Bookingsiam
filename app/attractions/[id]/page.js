import React from 'react'
import { getData } from './data'


export default async function page({ params }) {
  const id = params.id
  const data = await getData(id)
  console.log(id)
  return (
    <div>
        
      
        
    </div>
  )
}

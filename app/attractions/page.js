import React from 'react'
import { getData } from './data'

export default async function page() {
  const data = await getData()
  console.log(data)
  return (
    <div>
        <h1>Attractions </h1>
        <ul>
            {data.map(attraction => (
                <li key={attraction.id}>
                    
                    {attraction.name}<br/>
                    <img 
                        height={300} 
                        src= {attraction.coverimage}
                    /><br/>
                    {attraction.detail}
                    <a href={`/attractions/${attraction.id}`}>More Detail</a>
                </li>
            ))}
        </ul>
    </div>
  )
}

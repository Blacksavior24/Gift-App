import React from 'react'
import { useFetchGift } from '../hooks/useFetchGift'
import { GiftItem } from './GiftItem';

// props props.name            {name}

export const GiftGrid = ({category}) => {

  const {images} = useFetchGift(category)
  
  return (
    <>
      <h3>{category}</h3>

      <div className="card-grid">
          {
            images.map((image)=>(
              <GiftItem 
                key={image.id}
                {...image}
              />
            ))
          }
      </div>

    </>
  )
}

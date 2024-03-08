import React from 'react'

export const GiftItem = ({title, url, id}) => {
  return (
    <div className='card'>
      <img src={url} title={title} />
      <p>{title}</p>
    </div>
  )
}

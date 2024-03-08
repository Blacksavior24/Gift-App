import React, { useState } from 'react'
import { AddCategory, GiftGrid } from './components'

export const GiftApp = () => {
    const [categories, setCategories] = useState(['shingeky no kyogin'])
  
    const onAddCategory = (newCategory) =>{
      if (categories.includes(newCategory)) return;
      setCategories([newCategory, ...categories])
    }


  return (
    <>
        <h1>GiftExpertApp</h1>
        
        <AddCategory 
          onNewCategory={(value)=>onAddCategory(value)}
        />


        {
          categories.map((category)=>(
            <GiftGrid
              key={category}
              category={category}
            />
          ))
        }
    </>
  )
}

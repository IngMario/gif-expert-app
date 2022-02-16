import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
    
    const [categories, setCategories] = useState(['One Punch']);

    return (
      <>
        <h1 className="title-app">Gif<span>Expert</span>App</h1>
        <AddCategory setCategories={setCategories} />

        <ol className='card-container'>
          {categories.map((category) => (
            <GifGrid key={category} category={category} />
          ))}
        </ol>
      </>
    );
}

import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    const { data:images, loading } = useFetchGifs( category );

    return (
      <>
        <h3 className="tamano animate__animated animate__fadeIn animate__delay-1s">{" "}{category}{" "}</h3>

        {loading && (<p className='carga-centro'>Loading...</p>)}

        <div className="card-grid">
          {images.map((img) => (
            <GifGridItem key={img.id} {...img} />
          ))}
        </div>
      </>
    );
}

import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
    
    const [categories, setCategories] = useState(['One Punch']);

    return ( //paso la función como argumento en un hook para que addcategory pueda cambiar gifExpertApp
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories } /> 
            <hr />

            <ol>
                {
                    categories.map( category  => ( //aqui no puede ser un for, por cada catefory creo un gifGrid
                        <GifGrid 
                            key={ category } //La key es obligatoria y no puede repetirse
                            category={ category }
                        />
                    ))
                }
            </ol>

        </>
    )
}

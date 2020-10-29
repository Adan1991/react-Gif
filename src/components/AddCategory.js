import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState(''); // empieza con el textbox vacio''

    const handleInputChange = ( e ) => {
        setInputValue( e.target.value ); //e es el evento al cambiar el textbox, e.target.value lo que pone el textbox
    }

    const handleSubmit = (e) => {
        e.preventDefault();//no recarga toda la página

        if ( inputValue.trim().length > 2 ) {//solo funciona si el nombre tiene al menos dos letras
            setCategories( cats => [ inputValue, ...cats, ] ); //setcategories pasa a ser de cats a un array que tiene el nuevo input, antiguascats
            setInputValue('');//pongo el textbox vacio cuando se ha enviado
        }

    }

    return (
        <form onSubmit={ handleSubmit }>
            <input 
                type="text"
                value={ inputValue }
                onChange={ handleInputChange }
            />
        </form>
    )
}


AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired //es obligatorio pasar setCateories que debe ser de tipo funcion
}

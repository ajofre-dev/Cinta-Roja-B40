
import React from 'react';
import './card.css';


const Card = (props) => {

    const { titulo, descripcion, traduccion } = props;

    return (
        <div className='card blanca'>
            <span>
                {titulo}
            </span>            
            <span role='img' aria-label='emoji'>🐱‍👤</span>
            <p>
                {descripcion}
            </p>
        </div>
    );
}

export default Card;
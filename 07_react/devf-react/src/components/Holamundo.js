import React from 'react'
import './Holamundo.css'

const Holamundo = (props) => {

    const { contenido, titulo } = props;

    return (
        <div>
        <div className='hijo green'>
            {titulo}
        </div>

        <div className='hijo'>
            {contenido}
        </div>
        </div>
    )
}


export default Holamundo

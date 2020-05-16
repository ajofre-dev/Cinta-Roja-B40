import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div className="d-flex flex-column align-items-center">
            <h1 className="text-center">404</h1>
            <h3 className="text-center">Not found</h3>
            <Link className="btn btn-info" to="/" role="button">Volver al inicio</Link>
            
        </div>
    )
}

export default NotFound

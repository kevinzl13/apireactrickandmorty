import React from 'react'

const Personajes = ({personaje}) => {

    const {name,species,image} = personaje;

    return (
        <div className='col-md-4 mb-2'>
            <div className='card'>
                <img src={ image } alt={`imagen-${name}`} className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{species}</p>
                </div>
            </div>
        </div>
    );
};

export default Personajes;
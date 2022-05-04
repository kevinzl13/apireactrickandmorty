import React from 'react'

const Spinner = () => {
    return (
        <div className='text-center'>
            <button className="btn btn-primary" disabled>
                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Cargando...
            </button>
        </div>
    );
};

export default Spinner;
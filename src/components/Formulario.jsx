import React from 'react'
import { useFormulario } from './../Hooks/useFormulario';
import Swal from 'sweetalert2';

const Formulario = ({ setNombrePersonaje }) => {

    const [inputs, handleChange, reset] = useFormulario({
        nombre: '',
    });
    
    const { nombre } = inputs;

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(nombre);

        if (!nombre.trim()) {
            return Swal.fire({
                title: 'Error!',
                text: 'Inserte el personaje a buscar',
                icon: 'error',
                showConfirmButton: false,
                timer: 2000
            });
        }

        setNombrePersonaje(nombre.trim().toLowerCase());
        reset();
    };

    return (
        <>
            <form onSubmit={handleSubmit} >
                <div className="input-group my-3">
                    <input type="search" name="nombre" id="buscar" className='form-control' placeholder='Buscar personaje' value={nombre} onChange={handleChange} autoComplete="off" />
                    <button className="btn btn-outline-primary">Buscar</button>
                    {/* <button className="btn btn-outline-secondary" type='reset'>Restablecer</button> */}
                </div>
            </form>
        </>
    );
};

export default Formulario;
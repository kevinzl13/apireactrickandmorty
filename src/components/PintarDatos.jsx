import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2';
import Personajes from './Personajes';
import Spinner from './Spinner';

const PintarDatos = ({ nombrePersonaje }) => {

    const [personajes, setPersonajes] = useState([]);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        api(nombrePersonaje)
    }, [nombrePersonaje]);

    const api = async (nombre) => {
        setLoading(true);
        try {
            const res = await fetch(`https://rickandmortyapi.com/api/character/?name=${nombre}&status=alive`);

            if (!res.ok) {
                return Swal.fire({
                    title: 'Error!',
                    text: 'Inserte un personaje valido',
                    icon: 'error',
                    showConfirmButton: false,
                    timer: 2000
                });
            }

            const datos = await res.json();
            setPersonajes(datos.results);
        }
        catch (error) {
            console.log(error);
        }
        finally {
            setLoading(false);
        }
    };

    if(loading) {
        return <Spinner />
    }

    return (
        <div className='row mt-2'>
            <h1 className='text-center'>Personajes</h1>
            {
                personajes.map((item) => (
                    <Personajes key={item.id} personaje={item} />
                ))
            }
        </div>
    );
};

export default PintarDatos;
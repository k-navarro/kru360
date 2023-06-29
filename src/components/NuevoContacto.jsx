import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'

const NuevoContacto = () => {
    const [usuario, setUsuario] = useState({
        nombres: "",
        apellidos: "",
        email: "",
        telefono: "",
        fechaNacimiento: "",
        direccion: "",
        tipoContacto: "",
        origen: "",
    })

    const params = useParams()
    const navigate = useNavigate()

    const cambiarEstado = (evento) => {
        const { name, value } = evento.target;
        setUsuario({
            ...usuario,
            [name]: value
        });
    }

    const obtenerUsuarioPorId = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/usuarios/${params?.id}`)
            return response.data
        } catch (e) {

        }
    }

    const crearContacto = async () => {
        try {
            await axios.post('http://localhost:8080/usuario', usuario)
            navigate('/')
        } catch (e) {

        }
    }

    const editarContacto = async () => {
        try {
            await axios.put(`http://localhost:8080/usuario/${params?.id}`, usuario)
            navigate('/')
        } catch (e) {

        }
    }

    const confirmaPeticion = (estaCreando) => {
        if (estaCreando) {
            editarContacto()
        } else {
            crearContacto()
        }
    }

    useEffect(() => {
        if (params?.id) {
            try {
                obtenerUsuarioPorId().then(response => {
                    setUsuario(response)
                })
            } catch (e) {

            }
        }
    }, [params?.id])



    return (
        <>
            <div className=" flex flex-col items-center align-center ">
                <div className='w-11/12 mt-8'>
                    <h4 className=" text-left text-primario font-black my-3 text-lg "> {params?.id ? "Editar contacto" : "Nuevo contacto"}</h4>
                    <form className="bg-fondo shadow rounded-3xl p-4">
                        <input
                            name="nombres"
                            type="text"
                            placeholder="Nombres"
                            className="w-full  p-3 border rounded-full "
                            onChange={cambiarEstado}
                            value={usuario.nombres}
                        />
                        <input
                            name="apellidos"
                            type="text"
                            placeholder="Apellidos"
                            className="w-full mt-3 p-3 border rounded-full"
                            onChange={cambiarEstado}
                            value={usuario.apellidos}
                        />
                        <input
                            name="email"
                            type="email"
                            placeholder="E-mail"
                            className="w-full mt-3 p-3 border rounded-full"
                            onChange={cambiarEstado}
                            value={usuario.email}
                        />
                        <input
                            name="telefono"
                            placeholder="Cel/Tel"
                            className="w-full mt-3 p-3 border rounded-full"
                            onChange={cambiarEstado}
                            value={usuario.telefono}
                        />
                        <input
                            name="fechaNacimiento"
                            type="date"
                            className="w-full mt-3 p-3 border rounded-full text-[#888888] "
                            placeholder='Fecha de nacimiento'
                            onChange={cambiarEstado}
                            value={usuario.fechaNacimiento}
                        />
                        <input
                            name="direccion"
                            type="phone"
                            placeholder="Direccion"
                            className="w-full mt-3 p-3 border rounded-full "
                            onChange={cambiarEstado}
                            value={usuario.direccion}
                        />
                        <select
                            name="tipoContacto"
                            placeholder="Selecione"
                            className="w-full mt-3 p-3 border rounded-full text-[#888888] "
                            onChange={cambiarEstado}
                            value={usuario.tipoContacto}
                        >
                            <option value="" hidden> Tipo de contacto</option>
                            <option value="cliente">Cliente</option>
                            <option value="admin">Administrativo</option>
                        </select>
                        <select
                            name="origen"
                            placeholder="Selecione"
                            className="w-full mt-3 p-3 border rounded-full text-[#888888]"
                            onChange={cambiarEstado}
                            value={usuario.origen}
                        >
                            <option value="" hidden> Origen</option>
                            <option value="cliente">Cliente</option>
                            <option value="admin">Administrativo</option>
                        </select>
                    </form>
                </div>
                <div className='w-full mt-4 px-5 flex item-center gap-x-3 aling-center'>
                    <button
                        value="Añadir Contacto"
                        className="bg-fondoBoton mb-5 w-full py-2  text-white uppercase rounded-full"
                        onClick={() => navigate('/')}
                    >
                        cancelar
                    </button>
                    <button
                        value="Añadir Contacto"
                        className="bg-secundario mb-5 w-full py-2  text-white uppercase rounded-full"
                        onClick={() => confirmaPeticion(params.id)}
                    >
                        {params?.id ? 'Actualizar' : 'Agregar'}
                    </button>
                </div>


            </div>
        </>
    )
}

export default NuevoContacto

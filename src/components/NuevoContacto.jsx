
import React from 'react'

const NuevoContacto = () => {
    const isCreate = true;
    return (
        <>
            <div className="  mx-auto w-2/4 ">
                <h1 className=" text-center text-primario font-black my-3 text-2xl capitalize"> {isCreate ? "Nuevo contacto" : "Editar contacto"}</h1>
                <form className="  bg-fondo shadow rounded-3xl p-4">
                    <input
                        id="nombre"
                        type="text"
                        placeholder="Nombres"
                        className="w-full  p-3 border rounded-full "
                    />
                    <input
                        id="nombre"
                        type="text"
                        placeholder="Apellidos"
                        className="w-full mt-3 p-3 border rounded-full"
                    />
                    <input
                        id="email"
                        type="email"
                        placeholder="E-mail"
                        className="w-full mt-3 p-3 border rounded-full"
                    />
                    <input
                        id="celular"
                        type="phone"
                        placeholder="Cel/Tel"
                        className="w-full mt-3 p-3 border rounded-full"
                    />
                    <input
                        id="alta"
                        type="date"
                        className="w-full mt-3 p-3 border rounded-full text-[#888888] "
                        placeholder='Fecha de nacimiento'
                    />
                    <input
                        id="direccion"
                        type="phone"
                        placeholder="Direccion"
                        className="w-full mt-3 p-3 border rounded-full "
                    />
                    <select
                        placeholder="Selecione"
                        value="none"
                        className="w-full mt-3 p-3 border rounded-full text-[#888888] "
                    >
                        <option value="" hidden> Tipo de contacto</option>
                        <option value="cliente">Cliente</option>
                        <option value="admin">Administrativo</option>
                    </select>
                    <select
                        placeholder="Selecione"
                        value="none"
                        className="w-full mt-3 p-3 border rounded-full text-[#888888]"
                    >
                        <option value="" hidden> Origen</option>
                        <option value="cliente">Cliente</option>
                        <option value="admin">Administrativo</option>
                    </select>
                </form>
                <div className='mt-4 flex item-center gap-x-3 aling-center'>
                    <button
                        type="submit"
                        value="Añadir Contacto"
                        className="bg-fondoBoton mb-5 w-full py-3 text-white uppercase rounded-full"
                    >
                        cancelar
                    </button>
                    <button
                        type="submit"
                        value="Añadir Contacto"
                        className="bg-secundario mb-5 w-full py-3 text-white uppercase rounded-full">
                        Añadir contacto
                    </button>
                </div>


            </div>
        </>
    )
}

export default NuevoContacto

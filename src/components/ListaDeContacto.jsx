import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom'

import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddTaskIcon from '@mui/icons-material/AddTask';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import SearchIcon from '@mui/icons-material/Search';

const ListaDeContactos = () => {
  const [nombreUsuario, setNombreUsuario] = useState('')
  const [usuarios, setUsuarios] = useState([])
  const [usuariosFiltrados, setUsuariosFiltrados] = useState([])
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate()

  const open = Boolean(anchorEl);
  const URL = "http://localhost:8080"

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const filtradoUsuarios = (name) => {
    const filtro = usuarios.filter((usuario) =>
      usuario?.nombres.toUpperCase().includes(name?.toUpperCase()))
    setUsuariosFiltrados(filtro)
  }

  const obtenerUsuarios = async () => {
    try {
      const response = await axios.get(`${URL}/usuarios`)
      return response.data
    } catch (e) {

    }
  }

  const eliminarUsuario = async (id) => {
    try {
      await axios.delete(`${URL}/usuario/${id}`)
      obtenerUsuarios().then(response => {
        setUsuarios(response)
        setUsuariosFiltrados(response)
      })
    } catch (e) {
    }
  }

  useEffect(() => {
    try {
      obtenerUsuarios().then(response => {
        setUsuarios(response)
        setUsuariosFiltrados(response)
      })
    } catch (e) {
    }
  }, [])


  useEffect(() => {
    if (nombreUsuario.length) {
      filtradoUsuarios(nombreUsuario)
    }
    if (!nombreUsuario.length) {
      setUsuariosFiltrados(usuarios)
    }
  }, [nombreUsuario])

  return (
    <div className=" w-full px-8 flex flex-col items-center align-center  ">
      <div class="relative w-full">
        <input
          type="text"
          class="w-full mt-3 p-3 px-5 border rounded-full bg-fondo my-4 "
          placeholder="Buscar"
          value={nombreUsuario}
          onChange={(evento) => setNombreUsuario(evento.target.value)}
        />
        <div class="absolute inset-y-0 right-0 flex items-center pr-3">
          <SearchIcon sx={{ color: '#006192' }} />
        </div>
      </div>
      <div className='w-full'>
        <h1 className='text-primario text-md font-bold mb-2	'>Lista de contactos</h1>
        <div className=' w-full bg-fondo rounded-3xl'>
          {
            usuariosFiltrados?.map(usuario => (
              <div key={usuario._id} className='w-full flex items-center justify-between p-5 border border-b-5 border-white'>
                <div>
                  <p className=' font-bold' >{`${usuario?.nombres} ${usuario?.apellidos}`}</p>
                  <p className='text-primario'>{usuario?.telefono}</p>
                </div>
                <div className='flex items-center'>
                  <button onClick={() => navigate(`/editarContacto/${usuario._id}`)} className='cursor-pointer'>
                    <EditIcon sx={{ color: '#006192' }} />
                  </button>
                  <div>
                    <Button
                      id="basic-button"
                      aria-controls={open ? 'basic-menu' : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? 'true' : undefined}
                      onClick={handleClick}
                    >
                      <AddTaskIcon sx={{ color: '#006192' }} />
                    </Button>
                    <Menu
                      id="basic-menu"
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                      MenuListProps={{
                        'aria-labelledby': 'basic-button',
                      }}
                    >
                      <MenuItem onClick={handleClose}>LLamada telefonica</MenuItem>
                      <MenuItem onClick={handleClose}>Mensaje de texto</MenuItem>
                      <MenuItem onClick={handleClose}>Llamada por WhatsApp</MenuItem>
                      <MenuItem onClick={handleClose}>Mensaje de WhatsApp</MenuItem>
                    </Menu>
                  </div>

                  <button onClick={() => eliminarUsuario(usuario._id)} className='cursor-pointer'>
                    <DeleteIcon sx={{ color: '#006192' }} />
                  </button>
                </div>
              </div>
            ))
          }
        </div>
      </div>

      <button onClick={() => navigate('/nuevoContacto')} className='bg-primario mb-5 w-40 py-2 text-white uppercase rounded-full mt-5 items-center'>
        Agregar
        <PersonAddAltIcon className='ml-3' />
      </button>
    </div>

  )
}

export default ListaDeContactos 

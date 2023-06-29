import React from 'react'

import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  
}from '@mui/material'
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import SaveIcon from '@mui/icons-material/Save';

const ListaDeContactos = () => {
  return (
    <>
      <div className=" container mx-auto mt-2 bg-gray-400 md:w-2/3 md:justify-center lg:w-2/5 border rounded-xl text-center ">
        <h1 className='uppercase text-gray-600 block text-md font-bold'>Contactos</h1>
        <div>
          <List component='nav' className='align-content:center'>
            <ListItem>
            <ListItemText className='text right w-full'>aqui va el nombre del contact</ListItemText>
              <ListItemIcon >
              <EditIcon className='mr-3'/>
              <DeleteForeverIcon className='mr-2'/>
              <SaveIcon/>
              </ListItemIcon>  
            </ListItem>
          </List>

          <List component='nav' className='align-content:center'>
            <ListItem>
            <ListItemText className='text right w-full'>aqui va el nombre del contact</ListItemText>
              <ListItemIcon >
              <EditIcon className='mr-3'/>
              <DeleteForeverIcon className='mr-2'/>
              <SaveIcon/>
              </ListItemIcon>  
            </ListItem>
          </List>
          <footer>este es el footer</footer>
        </div>
      </div> 
    </>
  )
}

export default ListaDeContactos 

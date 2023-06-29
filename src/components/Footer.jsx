import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import TaskIcon from '@mui/icons-material/Task';
import MessageIcon from '@mui/icons-material/Message';

export const Footer = () => {
    return (
        <footer className=" w-full flex justify-center pb-7 bg-primario fixed bottom-0 rounded-t-3xl text-white">
            <div className='flex flex-col items-center  border-secundario border-t-8'>
                <PersonIcon sx={{ color: '#ffffff' }} />
                Contactos
            </div>
            <div className='flex flex-col items-center mx-5 mt-2'>
                <TaskIcon sx={{ color: '#ffffff' }}/>
                Tareas
            </div>
            <div className='flex flex-col items-center mt-2'>
                <MessageIcon sx={{ color: '#ffffff' }}/>
                Comentarios
            </div>
        </footer>
    )
}

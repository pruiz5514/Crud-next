import { ICoder, IEditCoder } from '@/models/coders/coder.model';
import { CoderService } from '@/services/coders.service';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

interface TdProps{
    children: React.ReactNode;
    coder: ICoder
    nameInput: string
}

const Td:React.FC<TdProps> = ({children, coder, nameInput}) => {
  const {name, avatar, id} = coder;
  const router = useRouter()

  const useCoderService = new CoderService();

  const [editCell, setEditCell] = useState(false);
  const [input, setInput] = useState(String(children));

  const handleEdit = () => {
    setEditCell(true);
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
    setInput(event.currentTarget.value)
  }

  const handleOnKeyDown  = async(event: React.KeyboardEvent<HTMLInputElement>) => {
    if(event.key === 'Enter'){
        if(nameInput === 'name'){
            const editUser = {
                name: event.currentTarget.value,
                avatar: avatar 
            }

            await useCoderService.edit(id,editUser);
            setEditCell(false);
            router.refresh();

        } else{
            const editUser = {
                name: name,
                avatar: event.currentTarget.value 
            }

            await useCoderService.edit(id,editUser);
            setEditCell(false);
            router.refresh();
        }

       
    }
  }

  const handleOnBlur = ()=>{
    setEditCell(false);
  }

  return (
    <td onDoubleClick={handleEdit}>
        {!editCell ? (<span>{children}</span>) : (<input value={input} onChange={handleChange} onKeyDown={handleOnKeyDown} onBlur={handleOnBlur} className='w-full'/> )}  
    </td>
  )
}

export default Td
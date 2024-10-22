'use client';

import { CoderService } from "@/services/coders.service";
import { useRouter } from "next/navigation";

const Form = () => {
  const useCoderService = new CoderService();
  const router = useRouter();

  const handleSubmit = async (event:React.FormEvent<HTMLFormElement>)=>{
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const date = new Date;
    const name = formData.get('name') as string;
    const avatar = formData.get('avatar') as string;

    const newCoder = {
        id: String(Date.now()),
        name: name,
        avatar: avatar,
        createdAt: date
    }

    await useCoderService.post(newCoder);
    router.refresh();
    
    
  }
  return (
    <form onSubmit={handleSubmit} className='mb-4'>
        <input type="text" placeholder='Name' name='name' />
        <input type="url"  placeholder='Avatar' name='avatar'/>
        <button>Send</button>
    </form>
  )
}

export default Form
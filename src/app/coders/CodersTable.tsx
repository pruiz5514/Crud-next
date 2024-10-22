"use client";

import { ICoder } from "@/models/coders/coder.model";
import { CoderService } from "@/services/coders.service";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Td from "../components/Td/Td";

interface IProps {
  data: ICoder[];
}

function CodersTable({ data }: IProps) {
//   const [coderList, setCoderList] = useState<ICoder[]>(data)

  const useCoderService = new CoderService()
  const router = useRouter()
  const handleDelete = async (id: string ) => {
    await useCoderService.destroy(id)
    router.refresh()
    
  }
  return (
    <table>
        <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Avatar</th>
                <th>Acciones</th>
            </tr>
        </thead>
        <tbody>
            {data.map((coder, index) => (
            <tr key={index}>
                <td>{coder.id}</td>
                <Td coder={coder} nameInput="name">{coder.name}</Td>
                <Td coder={coder} nameInput="avatar">{coder.avatar}</Td>
                <td> <button  onClick={()=> handleDelete(coder.id)}>Eliminar</button> </td>
            </tr>
            ))}
        </tbody>
    </table>
  );
}

export default CodersTable;
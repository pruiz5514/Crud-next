import { CoderService } from "@/services/coders.service";
import CodersTable from "./coders/CodersTable";
import Form from "./components/Form/Form";


const useCoderService = new CoderService()

export default async function Home() {
  const data = await useCoderService.findAll()
  return (
    <>
      <Form/>
      <CodersTable data={data}/>
    </>
    
  )
}
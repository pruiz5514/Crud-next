
import { ICoder, IEditCoder } from "@/models/coders/coder.model";
import { HttpClient } from "@/utils/client-http";

export class CoderService {
  private httpClient: HttpClient;

  constructor() {
    this.httpClient = new HttpClient();
  }

  async findAll() {
    try {
      const coders = this.httpClient.get<ICoder[]>("prueba");

      return coders;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async destroy(id: string) {
    try {
      const coders = this.httpClient.delete<ICoder>(`prueba/${id}`);

      return coders;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async edit(id:string, body:IEditCoder){
    try{
        const editCoder = this.httpClient.put<string, IEditCoder>(`prueba/${id}`, body);
        return editCoder
    } catch(error){
        console.log(error);
        throw error;
    }
  }

  async post(body:ICoder){
    try{
        const coder = this.httpClient.post<string,ICoder>(`prueba`, body);
        return coder;
    }catch(error){
        console.log(error);
        throw error;
    }
  }
}
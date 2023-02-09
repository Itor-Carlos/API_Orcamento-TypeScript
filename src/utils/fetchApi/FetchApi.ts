import axios, {AxiosError} from "axios";
import { HTTP_CODES } from "../../constants/httpCodes";

interface IResponseAxios<T>{
   status: number;
   statusText: string;
   data: T;
}

export async function fetchApi<T>(url: string): Promise<IResponseAxios<T>>{
   try{
      const response = await axios.get<T>(url);
      return response;
   }
   catch(error){
      if(error instanceof AxiosError){
         return {
            status: error.response?.status || HTTP_CODES.HTTP_INTERNAL_SERVER_ERROR,
            statusText: error.response?.statusText || "Internal server error",
            data: error.response?.data
         }
      }
      return {
         status: HTTP_CODES.HTTP_INTERNAL_SERVER_ERROR,
         statusText: "Internal server error.",
         data: {} as T,
     };
   }
}
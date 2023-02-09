import { HTTP_CODES } from "../constants/httpCodes";
import { fetchApi } from "../utils/fetchApi/FetchApi";


interface IProductResponse {
   id: number;
   name: string;
   price: number;
}

interface IResponse{
   status: HTTP_CODES;
   results: IProductResponse[] | [];
}

export class ProductListProvider {
   async getProducts(): Promise<IResponse> {
      const response = await fetchApi<IProductResponse[]>("https://mockend.com/juunegreiros/BE-test-api/products");
      if(response.status === HTTP_CODES.HTTP_SUCCESS){
         const { data } = response;
         return {
            status: HTTP_CODES.HTTP_SUCCESS,
            results: data
         }
      };
      return {
         status: HTTP_CODES.HTTP_BAD_REQUEST,
         results: []      
      }
   }
}
import { HTTP_CODES } from "../constants/httpCodes";
import { fetchApi } from "../utils/fetchApi/FetchApi";

interface IResponse{
   status: HTTP_CODES;
   results: IUserResponse[] | [];
}

interface IUserResponse{
   id: number;
   name: string;
   tax: number;
}

export class UsersListProvider {
   async getUsers(): Promise<IResponse> {
      const response = await fetchApi<IUserResponse[]>("https://mockend.com/juunegreiros/BE-test-api/users");
      if(response.status === HTTP_CODES.HTTP_SUCCESS){
         const { data } = response;
         return {
            status: HTTP_CODES.HTTP_SUCCESS,
            results: data
         };
      }
      return {
         status: HTTP_CODES.HTTP_BAD_REQUEST,
         results: []
      };
   }
}
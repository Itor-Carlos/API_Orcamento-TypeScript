import { UsersListProvider } from "../UsersListProvider/UsersListProvider";
import {Request, Response} from "express";

export class GetUsersController {

   async getUsers(req: Request, res: Response): Promise<Response> {
      const usersProvider = new UsersListProvider();
      const {status, results} = await usersProvider.getUsers();
      return res.status(status).json(results);
   }

}
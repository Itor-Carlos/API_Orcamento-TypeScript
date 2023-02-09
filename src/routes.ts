import { Router } from "express";
import { GetUsersController } from "./controllers/GetUsersController";

const routes = Router();

routes.get("/middleware/users", new GetUsersController().getUsers)

export {routes}
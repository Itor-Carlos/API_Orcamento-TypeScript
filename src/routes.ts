import { Router } from "express";
import { GetUsersController } from "./controllers/GetUsersController";

const routes = Router();

routes.get("/api/users", new GetUsersController().getUsers)

export {routes}
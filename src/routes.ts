import { Router } from "express";
import { GetUsersController } from "./controllers/GetUsersController";
import { GetProductsController } from "./controllers/GetProductsController"

const routes = Router();

routes.get("/middleware/users", new GetUsersController().getUsers)
routes.get("/middleware/products", new GetProductsController().getProducts)

export {routes}
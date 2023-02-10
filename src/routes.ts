import { Router } from "express";
import { GetUsersController } from "./controllers/GetUsersController";
import { GetProductsController } from "./controllers/GetProductsController"
import { GetChartPriceController } from "./controllers/GetChartPriceController";

const routes = Router();

routes.get("/middleware/users", new GetUsersController().getUsers)
routes.get("/middleware/products", new GetProductsController().getProducts)
routes.get("/middleware/chart/:userId/:productsId", new GetChartPriceController().handle)

export {routes}
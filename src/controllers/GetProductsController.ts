import { Request, Response } from "express";
import { ProductListProvider } from "../ProductsListProvider/ProductsListProvider";

export class GetProductsController {
   async getProducts(req: Request, res: Response): Promise<Response> {
      const productsProvider = new ProductListProvider();
      const {status, results } = await productsProvider.getProducts();
      return res.status(status).json(results);
   }
}
import { HTTP_CODES } from "../constants/httpCodes";
import { Request, Response } from "express";
import { UsersListProvider } from "../UsersListProvider/UsersListProvider";
import { ProductListProvider } from "../ProductsListProvider/ProductsListProvider";

interface IProduct {

}

export class GetChartPriceController {
   async handle(req: Request, res: Response): Promise<Response>{ 
      const {userId} = req.params;
      const {productsId} = req.params;

      if(!userId) return res.status(HTTP_CODES.HTTP_BAD_REQUEST).json("Usuário não informado");
      if(!productsId) return res.status(HTTP_CODES.HTTP_BAD_REQUEST).json("Produtos não informados")

      const userProvider = new UsersListProvider();
      const userResponse = await userProvider.getUsers();
      if(userResponse.status !==HTTP_CODES.HTTP_SUCCESS) return res.status(userResponse.status).json(userResponse.results)

      const user = userResponse.results.find(element => element.id === Number(userId));
      if(!user) res.status(HTTP_CODES.HTTP_NOT_FOUND).json("Usuário não encontrado")

      const productsProvider = new ProductListProvider();
      const productsResponse = await productsProvider.getProducts();
      if(productsResponse.status !== HTTP_CODES.HTTP_SUCCESS) return res.status(productsResponse.status).json(productsResponse.results);

      const productsChart = productsResponse.results.filter(({id}) => productsId.includes(id))
      
      const sumProductsChart = productsChart.map(({price}) => price*user.tax/100).reduce((acc, cur) => acc + cur, 0);

      return res.status(HTTP_CODES.HTTP_SUCCESS).send({
         user: user,
         chart: productsChart,
         totalValue: sumProductsChart
      })
   }
}
# API_Orcamento-TypeScript

Projeto de API de Orçamento

Esse projeto utiliza uma API externa disponibilizada pelo responsável do desafio

Features:
  * Buscar todos os usuários
  * Buscar todos os produtos
  * Calcula o valor do carrinho de um determinado usuário

Tecnologias:
  * Node
  * TypeScript
  * Jest
  
  
Como testar:
  1. Clone o repositório com este comando: ```git clone https://github.com/Itor-Carlos/API_Orcamento-TypeScript.git```
  2. Entre na pasta criada do projeto pelo cmd e instale as dependências com: ```yarn```
  3. Rode o projeto com ```yarn dev```
  4. Coloque a seguinte URL: ```http://localhost:3000/middleware/users```


Endpoints:
 * /middleware/users 
 * middleware/products
 * middleware/cart/:id/:productsId, exemplo: middleware/cart/1/[1,2,3]

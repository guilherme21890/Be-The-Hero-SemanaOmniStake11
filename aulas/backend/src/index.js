const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);

/**
* Rota / Recurso
*/

/**
 * Método HTTP:
 * 
 * GET: Buscar/Listar uma informação do back-end
 * POST: Criar uma infromação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar um informação no back-end
 */

/**
 * Tipos de parâmetros:
 * 
 * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
 * Route Params: Parâmetros utilizados para identificar recursos
 * Request Body: Corpo da requisição, utilizado para criar ou alter recursos
 */

/**
 * SQL: MySQL, **SQLite**, PostgreSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB, etc
 */

/**
 * Driver: SELECT * FRON users
 * Query Builder: table('users').select('*').where()
 */

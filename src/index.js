require("dotenv").config();
const express = require("express");
const alunoRotas = require("./route/alunoRotas");
//const swaggerUi = require("swagger-ui-express");
//const swaggerDocs = require("./util/swagger.json");

const app = express();

app.use(express.json());
//app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use("/aluno", alunoRotas);

app.listen(process.env.PORT, console.log("Servidor Inicializado..."));
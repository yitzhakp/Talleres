import { Request, Response } from "express";
import cors from "cors";
import express from "express";

// API ROUTES IMPORTS
import taller01Routes from "./taller01/taller01.routes";
import taller02Routes from "./taller02/taller02.routes";
import taller03Routes from "./taller03/taller03.routes";



// MIDDLEWARES
const app = express();

app.use(cors());
app.use(express.json());

// ROUTES
const SERVER_VERSION = "/api/v1/";

app.use(SERVER_VERSION + "taller01", taller01Routes);
app.use(SERVER_VERSION + "taller02", taller02Routes);
app.use(SERVER_VERSION + "taller03", taller03Routes);



// FALLBACKS

function routeNotFound(request: Request, response: Response) {
  response.status(404).json({
    message: "Route not found.",
  });
}

app.use(routeNotFound);

// START SERVER
app.listen(8080, () => {
  console.log("Server listening to port 8080.");
});

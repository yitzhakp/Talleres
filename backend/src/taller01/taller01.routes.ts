import { Router, Request, Response } from "express";
import { convertidorTemp, mejorParidad, peorParidad, resolvedor } from "./taller01.controller";

// INIT ROUTES
const taller01Routes = Router();

// DECLARE ENDPOINT FUNCTIONS
function PostConvertidorTemp(request: Request, response: Response) {
  const { tempC }: { tempC: number } = request.body
  console.log(tempC);

  const tempF = convertidorTemp(tempC)

  response.status(200).json({
    message: "Success.",
    tempF: tempF,
  });
}

function PostResolvedor(request: Request, response: Response) {
  const { a, b, c, positivo } = request.body

  const solution = resolvedor(a, b, c, positivo)

  response.status(200).json({
    message: "Success.",
    solution: solution,
  });
}

function PostMejorParidad(request: Request, response: Response) {
  const { num } = request.body

  const par = mejorParidad(num)

  response.status(200).json({
    message: "Success.",
    par: par,
  });
}

function PostPeorParidad(request: Request, response: Response) {
  const { num } = request.body

  const par = peorParidad(num)

  response.status(200).json({
    message: "Success.",
    par: par,
  });
}

// DECLARE ENDPOINTS
taller01Routes.post("/convertidorTemp", PostConvertidorTemp);
taller01Routes.post("/resolvedor", PostResolvedor);
taller01Routes.post("/mejorParidad", PostMejorParidad);
taller01Routes.post("/peorParidad", PostPeorParidad);

// EXPORT ROUTES
export default taller01Routes;

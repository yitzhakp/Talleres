import { Router, Request, Response } from "express";
import { findMax, includes, missingNumbers, sum } from "./taller02.controller";

// INIT ROUTES
const taller01Routes = Router();

// DECLARE ENDPOINT FUNCTIONS
function PostFindMax(request: Request, response: Response) {
  const { datos }: { datos: number[] } = request.body

  const max = findMax(datos)

  response.status(200).json({
    message: "Success.",
    max: max
  });
}

function PostIncludes(request: Request, response: Response) {
  const { datos, num }: { datos: number[], num: number } = request.body

  const answer = includes(datos, num)

  response.status(200).json({
    message: "Success.",
    answer: answer
  });
}

function PostMissingNumbers(request: Request, response: Response) {
  const { datos }: { datos: number[] } = request.body

  const missing = missingNumbers(datos)

  response.status(200).json({
    message: "Success.",
    missing: missing
  });
}

function PostSum(request: Request, response: Response) {
  const { datos }: { datos: number[] } = request.body

  const suma = sum(datos)

  response.status(200).json({
    message: "Success.",
    suma: suma,
  });
}

// DECLARE ENDPOINTS
taller01Routes.post("/findMax", PostFindMax);
taller01Routes.post("/includes", PostIncludes);
taller01Routes.post("/missingNumbers", PostMissingNumbers);
taller01Routes.post("/sum", PostSum);

// EXPORT ROUTES
export default taller01Routes;

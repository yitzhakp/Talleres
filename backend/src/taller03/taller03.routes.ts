import { Router, Request, Response } from "express";
import { conversionRomana, descomposicion, desglosarString, twoSum } from "./taller03.controller";

// INIT ROUTES
const taller03Routes = Router();

// DECLARE ENDPOINT FUNCTIONS
function PostConversionRomana(request: Request, response: Response) {
  const { num_romano }: { num_romano: string } = request.body

  const num = conversionRomana(num_romano)

  response.status(200).json({
    message: "Success.",
    num: num
  });
}

function PostDesglosarString(request: Request, response: Response) {
  const { text, analizar }: { text: string, analizar: string } = request.body

  const answer = desglosarString(text, analizar)

  response.status(200).json({
    message: "Success.",
    answer: answer
  });
}

function PostDescomposicion(request: Request, response: Response) {
    const { palabras }: { palabras: string } = request.body


  const res = descomposicion(palabras)

  response.status(200).json({
    message: "Success.",
    res: res
  });
}

function PostTwoSum(request: Request, response: Response) {
  const { numeros, obj }: { numeros: number[], obj: number } = request.body

  const res = twoSum(numeros, obj)

  response.status(200).json({
    message: "Success.",
    res: res,
  });
}

// DECLARE ENDPOINTS
taller03Routes.post("/conversionRomana", PostConversionRomana);
taller03Routes.post("/descomposicion", PostDescomposicion);
taller03Routes.post("/desglosarString", PostDesglosarString);
taller03Routes.post("/twoSum", PostTwoSum);

// EXPORT ROUTES
export default taller03Routes;

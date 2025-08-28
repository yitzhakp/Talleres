const findMax = (datos) => {
  let max = datos[0]
  for(let i = 1; i < datos.length; i++){
    if(datos[i]> max){
      max = datos[i]
    }
  }
  return max
}

const includes = (datos, num) => {
  for(let i = 0; i < datos.length; i++){
    if(datos[i]=== num){
      return true
    }
  }
  return false
}


const sum = (datos) => {
  let suma = 0
  for(let i = 0; i < datos.length; i++){
    suma += datos[i]
  }
  return suma
} 


const missingNumbers = (datos) => {
  let max = datos[0]
  let min = datos[0]

  for(let i = 1; i < datos.length; i++){
    if(datos[i]> max){
      max = datos[i]
    }
    if(datos[i]< min){
      min = datos[i]
    }
  }
  let faltantes = []
  for( let i = min; i <max; i++){
    if(! includes(datos, i)){
      faltantes.push(i)
    }
  }
  return faltantes
}

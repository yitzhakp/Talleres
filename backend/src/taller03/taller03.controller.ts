const contarVocales = (acum: number, actual: string) => {
  const vocales = ['a', 'e', 'i', 'o', 'u']
  return acum + (vocales.includes(actual.toLowerCase()) ? 1 : 0)
}

const contarConsonantes = (acum: number, actual: string) => {
  const consonantes = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "ñ", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"]
  return acum + (consonantes.includes(actual.toLowerCase()) ? 1 : 0)
}


const desglosarString = (texto: string, letrasAnalizar: string) => {
  const analizarValido = ['vocales', 'consonantes']
  if (!analizarValido.includes(letrasAnalizar)) {
    return
  }

  const letras = texto.split("")
  let conteo;

  if (letrasAnalizar === 'vocales') {
    conteo = letras.reduce(contarVocales, 0)
  } else if (letrasAnalizar === 'consonantes') {
    conteo = letras.reduce(contarConsonantes, 0)
  }
  return conteo
}

const twoSum = (numeros: number[], objetivo: number) => {
  let index2
  for (let i = 0; i < numeros.length; i++) {
    index2 = numeros.findIndex((numero, index) => numero == objetivo - numeros[i] && index !== i)

    if (index2 !== -1) {
      return [i, index2]
    }

  }
}

const conversionRomana = (numeroRomano: string) => {
  const valoresRomanos = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
  }

  const digitosRomanos = numeroRomano.split("") as (keyof typeof valoresRomanos)[]

  const numero = digitosRomanos.reduce((acum, value, index, digitosRomanos) => {
    if (valoresRomanos[value] < valoresRomanos[digitosRomanos[index + 1]]) {
      return acum - valoresRomanos[value]
    }
    return acum + valoresRomanos[value]
  }, 0)

  return numero
}

const descomposicion = (palabras: string) => {
  const [palabraDescomponer, ...diccionario] = palabras.split(",")

  let word2: string | undefined, objetivo: string
  for (let i = 0; i < diccionario.length; i++) {

    let sobrante;
    [sobrante, objetivo] = palabraDescomponer.split(diccionario[i], 2)


    if (sobrante === '') {
      word2 = diccionario.find((palabra) => palabra == objetivo)
    }

    if (word2) {
      return [diccionario[i], word2]
    }

  }
}


// EXPORT CONTROLLER FUNCTIONS
export { conversionRomana, descomposicion, desglosarString, twoSum }
const contarVocales = (acum, actual) => {
    const vocales = ['a', 'e', 'i', 'o', 'u']
    return acum + vocales.includes(actual.toLowerCase())
}

const contarConsonantes = (acum, actual) => {
    const consonantes = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "ñ", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"]
    return acum + consonantes.includes(actual.toLowerCase())
}


const desglosarString = (texto, letrasAnalizar) => {
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

const twoSum = (numeros, objetivo) => {
    let index2
    for (let i = 0; i < numeros.length; i++) {
        index2 = numeros.findIndex((numero, index) => numero == objetivo - numeros[i] && index !== i)

        if (index2 !== -1) {
            return [i, index2]
        }

    }
}

const conversionRomana = (numeroRomano) => {
    const valoresRomanos = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }

    const digitosRomanos = numeroRomano.split("")

    const numero = digitosRomanos.reduce((acum, value, index, digitosRomanos) => {
        if (valoresRomanos[value] < valoresRomanos[digitosRomanos[index + 1]]) {
            return acum - valoresRomanos[value]
        }
        return acum + valoresRomanos[value]
    }, 0)

    return numero
}

const descomposicion = (palabras) => {
    const [palabraDescomponer, ...diccionario] = palabras.split(",")

    let word2, objetivo
    for (let i = 0; i < diccionario.length; i++) {

        [sobrante, objetivo] = palabraDescomponer.split(diccionario[i], 2)

        
        if (sobrante === '') {
            word2 = diccionario.find((palabra) => palabra == objetivo)
        }

        if (word2) {
            return [diccionario[i], word2]
        }

    }
}



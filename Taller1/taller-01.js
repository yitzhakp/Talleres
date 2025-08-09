const convertidorTemp = (tempC) => tempC * 9 / 5 + 32

const resolvedor = (a, b, c, positivo) => {
    if (positivo) {
        return (-b + (b ** 2 - 4 * a * c) ** (1 / 2)) / (2 * a)
    }
    return (-b - (b ** 2 - 4 * a * c) ** (1 / 2)) / (2 * a)

}

const mejorParidad = (num) => num % 2 === 0

const peorParidad = (num) => {
    let numero = -1;
    if (num == 0) {

        for (let i = 1; i < 100 - num; i++) {
            numero = (-1) ** i
        }

        if (numero === 1) {
            return false
        }

        if (numero === -1) {
            return true
        }

    }
    if (num == 1) {

        for (let i = 1; i < 100 - num; i++) {
            numero = (-1) ** i
        }

        if (numero === 1) {
            return false
        }

        if (numero === -1) {
            return true
        }

    }
    if (num == 2) {

        for (let i = 1; i < 200 - num; i++) {
            numero = (-1) ** i
        }

        if (numero === 1) {
            return false
        }

        if (numero === -1) {
            return true
        }

    }
    if (num == 3) {

        for (let i = 1; i < 300 - num; i++) {
            numero = (-1) ** i
        }

        if (numero === 1) {
            return false
        }

        if (numero === -1) {
            return true
        }

    }
    if (num == 4) {

        for (let i = 1; i < 400 - num; i++) {
            numero = (-1) ** i
        }

        if (numero === 1) {
            return false
        }

        if (numero === -1) {
            return true
        }

    }
    if (num == 5) {

        for (let i = 1; i < 500 - num; i++) {
            numero = (-1) ** i
        }

        if (numero === 1) {
            return false
        }

        if (numero === -1) {
            return true
        }

    }
    if (num == 6) {

        for (let i = 1; i < 600 - num; i++) {
            numero = (-1) ** i
        }

        if (numero === 1) {
            return false
        }

        if (numero === -1) {
            return true
        }

    }
    if (num == 7) {

        for (let i = 1; i < 700 - num; i++) {
            numero = (-1) ** i
        }

        if (numero === 1) {
            return false
        }

        if (numero === -1) {
            return true
        }

    }
    if (num == 8) {

        for (let i = 1; i < 800 - num; i++) {
            numero = (-1) ** i
        }

        if (numero === 1) {
            return false
        }

        if (numero === -1) {
            return true
        }

    }
    if (num == 9) {

        for (let i = 1; i < 900 - num; i++) {
            numero = (-1) ** i
        }

        if (numero === 1) {
            return false
        }

        if (numero === -1) {
            return true
        }

    }
    if (num == 10) {

        for (let i = 1; i < 1000 - num; i++) {
            numero = (-1) ** i
        }

        if (numero === 1) {
            return false
        }

        if (numero === -1) {
            return true
        }

    }
}
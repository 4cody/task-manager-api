const calcTip = (total, tipPrc = .25) => total + (total * tipPrc)

const fahrenheitToCelsius = (temp) => {
    return (temp - 32) / 1.8
}

const celsiusToFahrenheit = (temp) => {
    return (temp * 1.8) + 32
}

const add = (a,b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(a<0 || b<0) {
                return reject('Numbers must be non-nagative')
            }

            resolve(a + b)
        }, 2000)
    })
}

module.exports = {
    calcTip,
    fahrenheitToCelsius,
    celsiusToFahrenheit,
    add
}
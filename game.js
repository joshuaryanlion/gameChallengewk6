const readline = require("readline")
//create interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
let quotes = {
    a: 1, b: 2, c: 3, d: 4, e: 5
}

let arr = Object.keys(quotes)
const numQuote = () => {
    let randomIndex = Math.floor(Math.random() * (arr.length))
    return arr[randomIndex]
}
let randomNumber = numQuote()

const askGuess = () => {
    rl.question(`Enter a guess: ${randomNumber} `, answer => {
        if (quotes[randomNumber] == answer) {
            console.log("sweet");
            rl.close()
        } else {
            console.log("balls")
            askGuess()
        }
    })
}


askGuess()

function welcomeMessage(name) {
    const greetings = [
        `Hej ${name}! Redo för att koda? :)`,
        `Välkommen ${name}! Lycka till med programmeringen! :)`,
    ]

    const randomIndex = Math.floor(Math.random() * greetings.length)
    return greetings[randomIndex]
}

function asciiFrame(message) {
    const length = message.length
    const border = "+" + "-".repeat(length + 2) + "+"
    const content = "| " + message + " |"
    
    return `${border}\n ${content}\n ${border}`
}
console.log("Välkommen till L1 i 1DV607")
console.log("==========================")

const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('Vad heter du?', (name) => {
    if (!name.trim()) {
        name = "Mystiska kodaren"
    }

    console.log(asciiFrame(welcomeMessage(name.trim())))
    rl.close()
})
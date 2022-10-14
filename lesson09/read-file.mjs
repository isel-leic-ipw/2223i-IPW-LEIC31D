import { readFile } from 'node:fs/promises'


const FILE_NAME = './ids.json' 

console.log(`Reading file ${FILE_NAME}.`)

readFile(FILE_NAME)
    .then(processFileContents)

console.log("End")

function processFileContents(fileContents) {
    console.log("Processing file contents")
    console.log(String(fileContents))
}


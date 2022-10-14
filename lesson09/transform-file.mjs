import { readFile, writeFile } from 'node:fs/promises'


const IN_FILE_NAME = './ids.json' 
const OUT_FILE_NAME = './odd-ids.json' 

console.log(`Reading file ${IN_FILE_NAME}.`)

readFile(IN_FILE_NAME)
    .then(processFileContents)

console.log("End")

function processFileContents(fileContents) {

    // Process the input file contents
    let objIds = JSON.parse(fileContents)
    let res = objIds['movie-ids'].filter(id => Number(id.at(-1)) % 2 == 1 )
    console.log(`Odd ids array ${res} `)

    // Write to the output file
    writeFile(OUT_FILE_NAME, JSON.stringify(res))
        .then( () => console.log(`Odd ids file ${OUT_FILE_NAME} written with success `)  )
        .catch( err => console.log(`Odd ids not written. Reason ${err}`)  )
    
    



    
}


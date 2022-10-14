import  fetch  from 'node-fetch'

const URL = 'https://imdb-api.com/en/API/Top250TVs/k_f8t6fjas'

console.log('making request using promises')
// Using Promises
fetch(URL)
    .then(res => res.json())
    .then(processResults)
    .catch(processError)

console.log('Nothing more to do using promises')


console.log('Making request using async/await style')

// Using async/await
async function makeRequest() {
    try {
        let response = await fetch(URL)
        let obj = await response.text()
        processResults(obj)
    } catch(err) {
        processError(err)
    }
    
}


makeRequest()
console.log('Nothing more to do using async/await')



// Utility code
function processResults(obj) {
    console.log('Processing results')
    //obj.items.forEach(s => console.log(`${s.title} - ${s.imDbRating}`))
    // console.log(
    //     obj.items.map(s => `${s.title} - ${s.imDbRating}`).slice(0,10)
    // )
}

function processError(error) {
    console.log(`An error occurred ${error} `)
}

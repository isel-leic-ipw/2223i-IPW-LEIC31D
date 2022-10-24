import fetch from 'node-fetch'


const URL = 'http://localhost:9200/movies'
//const URL = 'http://www.isel.pt/'

const req = {
    method: 'DELETE',
    headers: {
        Host: 'localhost',
        'User-Agent': "SLB" 
    },
    redirect: 'manual'

}
let rsp = await fetch(URL, req)
console.log(rsp)




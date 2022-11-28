// Module that contains the functions that handle all HTTP APi requests.
// Handle HTTP request means:
//  - Obtain data from requests. Request data can be obtained from: URI(path, query, fragment), headers, body
//  - Invoke the corresponding operation on services
//  - Generate the response in HTML format

import url from 'url'

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

export default function (tasksServices) {
    // Validate argument

    return {
        getHome: getHome,
        getCss: getCss,
    
    }

    async function getHome(req, rsp) {
      const htmlFileLocation = __dirname + 'public/index.html'
        console.log(htmlFileLocation)
        rsp.sendFile(htmlFileLocation)
    }

    async function getCss(req, rsp) {
      const htmlFileLocation = __dirname + 'public/site.css'
        rsp.sendFile(htmlFileLocation)
    }
    
}


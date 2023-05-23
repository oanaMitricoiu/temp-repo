 const http = require('http');

const server = http.createServer((req,res) => {
    if(req.url === '/'){
        res.end("Welcome to our about page")
    }
    if(req.url === '/about'){
        res.end("Here is our short history")
    }
    res.end(`
    <h1>Oops error</h1>
    <a href="/">back home</a>
    `)
})

 server.listen(5000)
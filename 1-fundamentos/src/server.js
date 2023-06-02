import http from 'node:http'

const users = {}

const server = http.createServer((req,res) => {
  const {method, url} = req;
  
  if(url == '/users' && method == 'POST'){
    users.push({
      id: 1,
      name: 'John',
      email: 'john@example.com'
    }
      )
      return res.writeHead(201).end
  }

  if(url == '/' && method === 'GET') {
    return res.end("Teste")
  }

  if(url == '/users/' && method === 'GET') {
    return res
    .setHeader('Content-Type', 'application/json')
    .end(JSON.stringify(users))
  }

})

server.listen(4000, () => console.log('listening on http://localhost:4000'));
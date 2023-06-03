import http from 'node:http'
import { json } from '../middlewares/json.js';
import { Database } from './database.js';

const database = new Database;


const server = http.createServer(async(req,res) => {
  const {method, url} = req;
  await json(req,res)

  if(url == '/users' && method == 'POST'){
    const {id, name, email} = req.body;
    console.log(req.body)
    const user = {
      id: 1,
      name,
      email,
    }

    database.insert('users', user)
    return res.writeHead(201).end();
  }

  if(url == '/' && method === 'GET') {
    return res.end("Teste")
  }

  if(url == '/users' && method === 'GET') {
    
    const users = database.select('users')

    return res
    .end(JSON.stringify(users))
  }

})

server.listen(4000, () => console.log('listening on http://localhost:4000'));
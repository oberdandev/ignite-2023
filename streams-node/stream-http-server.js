import http from 'node:http'
import {Readable, Writable, Transform} from 'node:stream'

class inverseNumberStream extends Transform {
  _transform(chunk, encoding, callback){
    const transformed = Number(chunk.toString() *-1)
    const buf = Buffer.from(String(transformed))

    console.log('transform: ', transformed, ' buffer', buf)

    callback(null, buf)
  }
}

const server = http.createServer(async(req,res) => {

  const buffers = []
  for await(const chunk of req){
    buffers.push(chunk)
  }

  const fullStreamContent = Buffer.concat(buffers).toString();

  console.log(fullStreamContent)

  return res.end(fullStreamContent)
  // return req
  // .pipe(new inverseNumberStream())
  // .pipe(res)
})

server.listen(3334, ()=> console.log('running at 3344'))
import {Readable, Writable, Transform} from 'node:stream'

class oneToHundredStream extends Readable {
  index = 1;
  _read(){
    const i = this.index++;

    setTimeout(
     ()=> { 
      if(i > 100){
      this.push(null)
    } else {
      const buf = Buffer.from(String(i))
      this.push(buf)
    }
  }, 1000)
}
}

class multipliyByTenStream extends Writable {
  _write(chunk, encoding, callback){
    console.log(Number(chunk.toString())*10)
    callback()
  }
}

class inverseNumberStream extends Transform {
  _transform(chunk, encoding, callback){
    const transformed = Number(chunk.toString() *-1)
    const buf = Buffer.from(String(transformed))

    callback(null, buf)
  }
}

new oneToHundredStream()
.pipe(new inverseNumberStream())
.pipe(new multipliyByTenStream())
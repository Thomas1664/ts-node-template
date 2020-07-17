import http from 'http'

http.createServer(handler).listen(80)

function handler(req, res) {
  console.log('Hello World')
}
import http from 'http'

http.createServer(handler).listen(80)

function handler(req: any, res: any) {
  console.log('Hello World')
}
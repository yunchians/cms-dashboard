const express = require('express')
const path = require('path')
const http = require('http')

const app = express()
const staticPath = './dist'
const port = process.env.port || 888

const options = process.env.env == 'prod' ? { maxAge: '3d' } : { maxAge: '1m' }
app.use(express.static(path.join(__dirname, staticPath), options))

app.use('/**', function(req, res) {
  res.sendfile(staticPath + '/index.html', { maxAge: 0 })
})

const server = http.createServer(app)
server.listen(port)

console.log(`> Preview at  http://localhost:${port}`)

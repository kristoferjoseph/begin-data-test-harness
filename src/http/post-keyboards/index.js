const data = require('@begin/data')
const arc = require('@architect/functions')

exports.handler = async function http (req) {
  let body = arc.http.helpers.bodyParser(req)
  body.Object = {
    name: 'MITO LASER',
    type: 'keycaps'
  }
  body.Array = [1, 2, 3]
  body.Function = function yolo() {
    return 'YOLO!'
  }
  let saved = await data.set({
    table: 'keyboards',
    ...body
  })
  return {
    statusCode: 302,
    headers: { 'location': '/' }
  }
}

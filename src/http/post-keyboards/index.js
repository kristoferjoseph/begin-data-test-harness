const data = require('@begin/data')
const arc = require('@architect/functions')

exports.handler = async function http (req) {
  let body = arc.http.helpers.bodyParser(req)
  let saved = await data.set({
    table: 'keyboards',
    ...body
  })
  return {
    statusCode: 302,
    headers: { 'location': '/' }
  }
}

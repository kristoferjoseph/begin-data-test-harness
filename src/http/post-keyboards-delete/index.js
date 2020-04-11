const data = require('@begin/data')
const arc = require('@architect/functions')

exports.handler = async function http (req) {
  let body = arc.http.helpers.bodyParser(req)
  let removed = data.destroy({
    ...body
  })
  return {
    statusCode: 302,
    headers: {
      'location': '/'
    }
  }
}

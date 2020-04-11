const data = require('@begin/data')

exports.handler = async function http (req) {
  let keyboards = await data.get({
    table: 'keyboards'
  })
  return {
    headers: {
      'content-type': 'application/json; charset=utf8'
    },
    body: JSON.stringify(keyboards, null, 2)
  }
}

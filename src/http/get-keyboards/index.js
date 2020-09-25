const data = require('@begin/data')

exports.handler = async function http (req) {
  let keyboards = await data.get({
    table: 'keyboards'
  })
  return JSON.stringify(keyboards, null, 2)
}

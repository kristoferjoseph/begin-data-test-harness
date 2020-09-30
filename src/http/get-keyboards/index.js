const data = require('@begin/data')

exports.handler = async function http (req) {
  let pages = await data.get({
    table: 'keyboards',
    limit: 25
  })

  let keyboards = []
  for await (let record of pages) {
    keyboards.push(record)
  }

  return JSON.stringify(keyboards, null, 2)
}

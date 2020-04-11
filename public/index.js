(async function Main() {
  const list = document.getElementById('js-keyboard-list')
  let keyboards
  try {
    keyboards = await (await fetch('/keyboards')).json()
  } catch (err) {
    console.error(err)
  }

  if (list) {
    console.log('keyboards: ', keyboards)
    let items = keyboards && keyboards.map(k => Item(k))
    list.innerHTML = items
  }

  function Item(props) {
    props = props || {}
    let entries = []
    let inputs = []
    let id = key => key === 'key'
    let table = key => key === 'table'
    for (let [key, value] of Object.entries(props)) {
      if (id(key)) {
        inputs.push(`<input type="hidden" name="key" value=${value}>`)
      }
      else if (table(key)) {
        inputs.push(`<input type="hidden" name="table" value=${value}>`)
      }
      else {
        entries.push(`<div><b>${key}</b>: ${value}</div>`)
      }
    }

    return `
      <li>
        ${entries.join('')}
        <form action="/keyboards/delete" method="POST">
          ${inputs.join('')}
         <button>🗑</button>
        </form>
      </li>
    `
  }
}())

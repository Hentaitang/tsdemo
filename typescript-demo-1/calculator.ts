{
  function createButton(
    text: string,
    container: HTMLElement,
    className: string
  ) {
    let button: HTMLButtonElement = document.createElement('button')
    button.textContent = text
    if (className) button.className = className
    container.appendChild(button)
    // return button
  }

  let container: HTMLDivElement = document.createElement('div')
  container.classList.add('calculator')
  let output: HTMLDivElement = document.createElement('div')
  output.classList.add('output')
  let span: HTMLSpanElement = document.createElement('span')
  span.textContent = '0'
  output.appendChild(span)
  container.appendChild(output)
  document.body.append(container)

  let n1: number, n2: number, operator: string

  container.addEventListener('click', event => {
    if (event.target instanceof HTMLButtonElement) {
      let button = event.target
      let text = button.textContent
      if ('0123456789'.indexOf(text) >= 0) {
        if (operator) {
          if (n2) {
            n2 = parseInt(n2.toString() + text)
          } else {
            n2 = parseInt(text)
          }
        } else {
          if (n1) {
            n1 = parseInt(n1.toString() + text)
          } else {
            n1 = parseInt(text)
          }
        }
      } else if ('+-x÷'.indexOf(text) >= 0) {
        operator = text
      } else {
        console.log('不知道')
      }
      console.log(n1, n2, operator)
    } else {
      console.log('不是button')
    }
  })

  let keys: Array<Array<string>> = [
    ['Clear', '÷'],
    ['7', '8', '9', 'x'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', '.', '=']
  ]

  keys.forEach((textList: Array<string>) => {
    let div: HTMLDivElement = document.createElement('div')
    div.classList.add('row')
    textList.forEach(text => {
      createButton(text, div, `button text-${text}`)
    })
    container.appendChild(div)
  })
}

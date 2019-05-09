class Student {
  全名: string
  constructor(public 姓: string, public 名: string) {
    this.全名 = 姓 + 名
  }
}

interface Person {
  姓: string
  名: string
}

function greeter(person: Person) {
  return 'Hello, ' + person.姓 + person.名
}

let user = new Student('林', '智兴')

document.body.innerHTML = greeter(user)

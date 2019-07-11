{
  // function add(n1: number, n2: number)
  // function add(n1: string, n2: string)
  // function add(n1, n2) {
  //   return n1 + n2
  // }

  // add(1, 2) //3
  // add('1', '2') // '12'
  // add(1, '2') //错

  // function add<T>(n1: T, n2: T) {
  //   return n1 + n2 // 泛型无法代替重载，泛型无法只指定number和string
  // }

  // function add(n1: string, n2: string) {
  //   return n1 + n2
  // }

  // let s = add('abc', 'def')
  // console.log(s.split(''))

  // function fuck(n1: number, n2: number) {
  //   return '1'
  // }

  // let a = fuck(1, 2)

  // interface Human {
  //   name: string
  //   age: number
  // }

  // let y = { name: 'Hentaitang', age: 25, gender: 'male' }
  // let x: Human = y
  // let x :Human = {name: 'Hentaitang', age: 25, gender: 'male'}

  enum EventType {
    Mouse,
    Keyboard
  }
  interface Event {
    timestamp: number
  }
  interface MouseEvent extends Event {
    x: number
    y: number
  }
  interface keyEvent extends Event {
    keyCode: number
  }

  function listenEvent(EventType: EventType, handler: (n: Event) => void) {
    /*...*/
  }

  listenEvent(EventType.Mouse, (e: MouseEvent) => console.log(e.x + ',' + e.y))

  listenEvent(EventType.Mouse, (e: Event) =>
    console.log((<MouseEvent>e).x + ',' + (<MouseEvent>e).y)
  )
  // 强制转换
  listenEvent(EventType.Mouse, <(e: Event) => void>(
    ((e: MouseEvent) => console.log(e.x + ',' + e.y))
  ))

  listenEvent(EventType.Mouse, (e: number) => console.log(e))
}

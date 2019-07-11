{
  // interface hasLength {
  //   length: number
  // }
  // // 泛型
  // function returnIt<T extends hasLength>(sth: T): T {
  //   console.log(sth.length)
  //   return sth
  // }

  // interface Human {
  //   name: string
  //   age: number
  // }

  // let s = returnIt<Human>({ name: 'Hentaitang', age: 25 })
  // // let s = returnIt<string>('hi')
  // // let s = returnIt('hi')

  // function returnArray<T>(array: T[]): T[] {
  //   return array
  // }

  // let a: Human[] = returnArray([{ name: 'Hentaitang', age: 25 }])

  // let identify: <T>(arg: T) => T = returnIt

  // interface add<T> {
  //   (a: T, b: T): T
  // }

  // let numberAdd: add<number> = (a2: number, b2: number): number => {
  //   return a2 + b2
  // }

  // function create(c: { new (): string }) {
  //   return new c()
  // }

  function create<T>(c: { new (): T }) {
    return new c()
  }

  class Human {}

  let s = create<Human>(Human)
}

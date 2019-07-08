{
  // JS七种类型
  // let a: string = 'hello'
  // let b: null = null
  // let c: undefined = undefined
  // let d: boolean = true
  // let e: number = 123
  // let f: Object = { name: 'Hentaitang' }
  // let g: Symbol = Symbol('hi')
  // console.log(a, b, c, d, e, f, g)
  // let n: number = 1
  // // n = 'string'
  // let n1: any = 1
  // n1 = 'string'
  // 枚举
  // enum Gender {
  //   Man = 'man',
  //   Woman = 'woman'
  // }
  // let gender: Gender = Gender.Man
  // gender = Gender.Woman
  // console.log(gender)
  // void
  // function print(x: any): void {
  //   console.log(x)
  // }
  // let a: number = print(1)
  // 类型断言
  // let n: any = '123'
  // // let string = n.toString()
  // // console.log(string.split(''))
  // // console.log((<string>n).split(''))
  // console.log((n as string).split(''))
  // 类型转换
  // let a: number = 123
  // let b: string = a.toString()
  // let c: string = '123'
  // let d: number = parseFloat(c)
  // let s1: number = 2
  // let b1: boolean = Boolean(s1)
  // console.log(b1)
  // let obj: Object = { name: 'Hentaitang', age: 25 }
  // let string: string = JSON.stringify(obj)
  // console.log(string)
  // let obj = {
  //   name: 'Hentaitang',
  //   age: 25,
  //   nation: 'China'
  // }
  // // 解构
  // let { name, age, nation } = obj
  // console.log(name, age, nation)
  // //  数组解构
  // let arr = ['apple', 'orange', 'pear']
  // let [fruit1, fruit2, fruit3] = arr
  // console.log(fruit1, fruit2, fruit3)
  // function sayHi({ name, age }: any): void {
  //   console.log(`Hi, ${name}, ${age}`)
  // }
  // sayHi({ name: 'Hentaitang', age: 25 })
  // let a1 = [1, 2, 3]
  // let a2 = [4, 5, 6]
  // let a3 = [...a1, ...a2]
  // console.log(a3)
  // let o1 = { name: 'Hentaitang', age: 25 }
  // let o2 = { nation: 'China' }
  // let o3 = { ...o1, ...o2 }
  // console.log(o3)

  // 函数
  function fn() {
    console.log(1)
  }

  // 方法(fn是obj的方法)
  let obj = {
    fn: function() {
      console.log(2)
    }
  }
}

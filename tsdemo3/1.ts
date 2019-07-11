{
  // function hi(name: string, age = 25): number | string {
  //   // this argument
  //   console.log(`Hi, ${name}`)
  //   if (age > 18) {
  //     return 'hi'
  //   } else {
  //     return age
  //   }
  // }

  // let hi2 = function(name: string, age?: number): void {
  //   console.log(`Hi, ${name}`)
  // }

  // let hi3 = (name: string, age: number): void => {
  //   console.log(`Hi, ${name}, ${age}`)
  // }

  // hi('Hentaitang', 18)
  // hi3('Hentaitang', 25)

  // function add(a: number, b: number): number {
  //   // let a = arguments[0]
  //   // let b = arguments[1]
  //   // a b 是形式参数(实际是给arguments对应的数字声明一个变量)
  //   console.log(arguments.length)
  //   return arguments[0] + arguments[1]
  //   // return a + b
  // }

  // let c = add(100, 200) //实际参数
  // // let d = add.call(undefined, 100, 200) // 第一个参数不传就设为undefined
  // // this 为call的第一个参数
  // let d = add.call(this, 100, 200)
  // console.log(c)

  // // arguments 就是你传的所有参数
  // // arguments = {
  // //   0: 100,
  // //   1: 200,
  // //   length: 2
  // // }

  // function printThis(): void {
  //   'use strict'
  //   console.log(this)
  //   console.log(arguments)
  // }

  // printThis.call('fuck', 100, 200)

  // // printThis(100, 200)
  // // 1. this => window 在浏览器中
  // // 2. this => global对象 在node中
  // // 3. this => undefined 使用'use strict'

  // let obj = {
  //   fn() {
  //     console.log(this) // this 是参数，在调用时才知道
  //   },
  //   obj2: {
  //     fn2() {
  //       console.log(this)
  //     }
  //   }
  // }

  // obj.obj2.fn2()
  // // this 为 obj.obj2

  let fn = (a: number, b: number): number => {
    // this // 外面的this
    return a + b // 没有this arguments new.target
  }

  // let fn2 = (a: number, b: number): number => a + b
}

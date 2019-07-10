// interface Shape {
//   head: string
//   body: string
// }

// interface Human {
//   readonly name: string
//   age: number
//   shape: Shape
//   likedGame?: Array<string>
//   say(word: string): void
// }

// let Hentaitang: Human = {
//   name: 'Hentaitang',
//   age: 25,
//   shape: { head: '圆的', body: '方的' },
//   say(word: string) {
//     console.log(`${this.name}:${word}`)
//   }
//   // likedGame: ['王者荣耀', 'LOL']
// }

// Hentaitang.say('Hi')

// interface RectConfig {
//   width?: number
//   height?: number
//   [propName: string]: any
// }

// function createRect(config: RectConfig): void {
//   // ..
// }

// let config = {
//   width: 100,
//   height: 200,
//   color: 'red'
// }

// let mySquare = createRect(config)

// interface 二则运算 {
//   (a: number, b: number): number
//   逆运算(a: number, b: number): number
// }

// let add: 二则运算 = ((): 二则运算 => {
//   let x: any = function(c: number, d: number): number {
//     return c + d
//   }

//   x.逆运算 = function(c: number, d: number): number {
//     return c - d
//   }
//   return x
// })()

interface 有机物 {
  c: boolean
  h: boolean
  o: boolean
}

interface Animal extends 有机物 {
  move(): void
}

// interface 有机物 {
//   c: boolean
//   h: boolean
//   o: boolean
// }

// interface Human extends Animal, 有机物 {
//   age: number
//   name: string
// }

interface Human extends Animal {
  age: number
  name: string
}

let Hentaitang: Human = {
  age: 25,
  name: 'Hentaitang',
  c: true,
  h: true,
  o: true,
  move() {
    console.log('我在动')
  }
}

Hentaitang.move()

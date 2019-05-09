// 求最小值
// function min(a: number, b: number): number {
//   if (a < b) {
//     return a
//   } else {
//     return b
//   }
// }

// let c = min(1, 2)
// console.log(c)

// 求和
// function add(a: string, b: string): string
// function add(a: number, b: number): number
// function add(a: any, b: any): any {
//   return a + b
// }

// let c = add(1, 2)
// let d = add('1', '2')
// console.log(c)
// console.log(d)

// 选择排序
// function selectSort(a: number[]): number[] {
//   for (let i = 0; i < a.length - 1; i++) {
//     let minIndex = i
//     for (let j = i + 1; j < a.length; j++) {
//       if (a[j] < a[minIndex]) {
//         minIndex = j
//       }
//     }
//     let temp = a[minIndex]
//     a[minIndex] = a[i]
//     a[i] = temp
//   }
//   return a
// }

// console.log(selectSort([2, 1, 3, 5, 4]))

// 类型相关
// enum Gender {
//   Male,
//   Female
// }

// interface Person {
//   gender: Gender
// }

// function merry(a: Person, b: Person): [Person, Person] {
//   if (a.gender !== b.gender) {
//     return [a, b]
//   } else {
//     throw new Error('性别相同不能结婚')
//   }
// }

// let c = { gender: Gender.Male }
// let d = { gender: Gender.Female }
// console.log(merry(c, d))

// 枚举
enum color {
  green = 3,
  yellow,
  blue
}

let myColor: string = color[5]
console.log(myColor)

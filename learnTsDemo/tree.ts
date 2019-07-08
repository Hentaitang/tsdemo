#!/usr/bin/env ts-node
function creatPrefix(n: number): string {
  return '----'.repeat(n)
}
{
  class Person {
    public children: Person[] = []
    constructor(public name: string) {}
    sayHi() {
      console.log('大家好，我是 ' + this.name)
    }
    addChild(child: Person): void {
      this.children.push(child)
    }
    introduceFamily(n?: number): void {
      n = n || 1
      console.log(creatPrefix(n - 1) + this.name)
      this.children.forEach(child => {
        child.introduceFamily(n + 1)
      })
    }
  }

  let grandPa = new Person('王麻子')
  let child1 = new Person('王子')
  let child2 = new Person('王大锤')
  let preson11 = new Person('王茂')
  let preson12 = new Person('王水')
  let preson21 = new Person('王荣耀')
  let preson22 = new Person('王容')
  grandPa.addChild(child1)
  grandPa.addChild(child2)
  child1.addChild(preson11)
  child1.addChild(preson12)
  child2.addChild(preson21)
  child2.addChild(preson22)
  grandPa.introduceFamily()
}

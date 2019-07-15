{
  // 类型保护和类型区分
  // 如果为原始类型（7种），可以使用typeof a === 'number'
  // 还可使用 instanceof
  function isFish(pet: Fish | Bird): pet is Fish {
    return (<Fish>pet).swim !== undefined
  }
  function isBird(pet: Fish | Bird): pet is Bird {
    return (<Bird>pet).fly !== undefined
  }

  // typeof(基本类型)
  function fn(a: A | B | C | D) {
    if (typeof a === 'A') {
    }
    // if (a instanceof A) {
    // }
  }

  // 接口vs类型别名
  // 实际工作中尽量使用interface
  // 1、接口创建一个新的名字可以再其他任何地方使用，但类型别名并不创建新的名字（类型别名的错误信息不回使用别名）
  // 2、类型别名不能被extends和implements
  // 3、实在接口搞不定再用类型别名

  // 字符串字面量类型
  type Dir = 'up' | 'down' | 'left' | 'right'

  // 数字字面量类型
  type SZ = 1 | 2 | 3 | 4 | 5

  // 可辨识联合
  // 如果把几个类型联合起来，同时几个类型含有相同属性。
  // 只要根据这个属性判断就可以辨别这个对象是哪个类型
  // 完整性检查：要根据这个属性判断就要写完整
  interface Square {
    kind: 'square'
    size: number
  }

  interface Rectangle {
    kind: 'rectangle'
    width: number
    height: number
  }

  interface Circle {
    kind: 'circle'
    radius: number
  }

  type Shape = Square | Rectangle | Circle

  function area(s: Shape) {
    switch (s.kind) {
      case 'square':
        return s.size * s.size
      case 'rectangle':
        return s.width * s.height
      case 'circle':
        return Math.PI * s.radius * 2
    }
  }

  // nerver类型：除去所有可能后剩下的类型
  // 永不存在的值的类型，例如never类型是那些总是会抛出异常或根本不会有返回值的函数表达式或箭头函数的返回值的返回类型

  // 多态的 this类型表示的是某个包含类或接口的 子类型
  class BasicCalculator {
    public constructor(protected value: number = 0) {}
    public currentValue(): number {
      return this.value
    }
    public add(operand: number): this {
      this.value += operand
      return this
    }
    public multiply(operand: number): this {
      this.value *= operand
      return this
    }
  }
  // 由于这个类使用了 this类型，你可以继承它，新的类可以直接使用之前的方法，不需要做任何的改变
  class ScientificCalculator extends BasicCalculator {
    public constructor(value = 0) {
      super(value)
    }
    public sin() {
      this.value = Math.sin(this.value)
      return this
    }
  }

  // 如果没有 this类型， ScientificCalculator就不能够在继承 BasicCalculator的同时还保持接口的连贯性。
  // multiply将会返回 BasicCalculator，它并没有 sin方法。
  // 然而，使用 this类型， multiply会返回 this，在这里就是 ScientificCalculator
  let v = new ScientificCalculator(2)
    .multiply(5)
    .sin()
    .add(1)
    .currentValue()

  // 索引类型
  // js中常见的从对象中选取属性的子集
  function pluck(o, names) {
    return names.map(n => o[n])
  }

  // 使用 索引类型查询和 索引访问操作符 在ts中实现
  // 索引类型查询操作符 keyof T
}

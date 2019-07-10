{
  abstract class Animal {
    kind: string
    protected birth: string
    constructor(kind: string) {
      this.kind = kind
      if (this.kind === '哺乳动物') {
        this.birth = '胎生'
      } else {
        this.birth = '卵生'
      }
    }
    move(): void {}
    abstract makeNoice(): void
  }

  class Human extends Animal {
    static xxx = 1
    public name: string
    private _age: number
    get age() {
      return this._age
    }
    set age(value: number) {
      if (value < 0) {
        this._age = 0
      } else {
        this._age = value
      }
    }
    private secret: string
    constructor(name: string, age: number = 25) {
      super('哺乳动物')
      this.name = name
      this.age = age
    }
    move(): void {
      console.log('我在动')
    }
    makeNoice() {
      console.log('说中文')
    }
    // say(): string {
    //   this.move()
    //   return 'hi'
    // }
  }

  let Hentaitang = new Human('Hentaitang')
  Hentaitang.age = 100
  console.log(JSON.stringify(Hentaitang))
}

// 类
class People {
  // 属性
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  // 方法
  eat() {
    alert(`${this.name} eat something`)
  }
  speak() {
    alert(`My Name is ${this.name}`)
  }
}

// 创建实例对象
let zhang = new People('zhang', 20)
zhang.eat()
zhang.speak()


// 继承
class Student extends People{
  constructor(name, age, number){
    super(name, age);
    this.number = number;
  }
  study() {
    alert(`${this.name} study`);
  }
}

// 学生实例
let xiaoming = new Student('xiaoming',10,'A1');
xiaoming.study();
console.log(xiaoming.number);
xiaoming.eat(); // 继承于父类的方法

// TypeScript

class People1 {
	name
	age
	protected weight
	constructor(name, age) {
		this.name = name
		this.age = age
		this.weight = 120
	}
	eat() {
    alert(`${this.name} eat something`)
  }
  speak() {
    alert(`My Name is ${this.name}`)
  }
}

class Student1 extends People{
	number
	private girlfriend // 私有的
  constructor(name, age, number){
    super(name, age);
    this.number = number;
    this.girlfriend = 'xiaoli'
  }
  study() {
    alert(`${this.name} study`);
  }
  getWeight() {
  	alert(`${this.weight}`)
  }
}
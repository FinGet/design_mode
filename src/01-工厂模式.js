class Product {
	constructor (name) {
		this.name = name
	}
	init () {
		alert('init')
	}
	fn1 () {
		alert('fn1')
	}
	fn2 () {
		alert('fn2')
	}
}

// 工厂
class Creator {
	create (name) {
		return new Product(name)
	}
}

let creator = new Creator()
let p = creator.create('p1')
p.init()
p.fn1()



// 抽象工厂
var XMLHttpFactory = function() {}

XMLHttpFactory.prototype = {
	// 如果真的要调用这个方法会抛出一个错误，它不能被实例化，只能用来派生子类
	createFactory: function () {
		throw new Error('This is an abstract class')
	}
}

// 经典继承
var XHRHandler = function () {
	XMLHttpFactory.call(this) 
}
XHRHandler.prototype = new XMLHttpFactory()
XHRHandler.prototype.constructor = XHRHandler

XHRHandler.prototype.createFactory = function() {
	var XMLHttp = null;
  if(window.XMLHttpRequest) {
    XMLHttp = new XMLHttpRequest()
  } else if (window.ActiveXObject){
    XMLHttp = new ActiveXObject("Microsoft.XMLHttp")
  }
  return XMLHttp;
}
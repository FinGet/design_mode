class SingleObject {
	login() {
		console.log('login')
	}
}
SingleObject.getInstance = (fucntion () {
	let instance
	return function () {
		if (!instance) {
			instance = new SingleObject()
		}
		return instance
	}
})()

// 一个页面中调用登录框
let login1 = LoginForm.getInstance()
login1.show()
// login1.hide()

// 另一个页面中调用登录框
let login2 = LoginForm.getInstance()
login2.show()

// 两者是否相等
console.log('login1 === login2', login1 === login2)


console.log('------------分割线------------')

let obj3 = new SingleObject()
obj3.login()
console.log('obj1===obj3',obj1 === obj3)
class UserTemplate {
  constructor(name, password, age) {
    this.name = name;
    this.password = password;
    this.age = age;
    this.createdAt = new Date();
    this.connected = false;
  }
  login() {
    this.connected = true;
  }
  logout() {
    this.connected = false;
  }
  checkStatus() {
    console.log("Your login status :", this.connected);
  }
}

let user = new UserTemplate("Richard", "African grey", 20);

console.log(user.name);
console.log(user.password);
user.checkStatus();
user.login();
user.checkStatus();
user.logout();
user.checkStatus();

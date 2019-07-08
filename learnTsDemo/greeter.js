var Student = /** @class */ (function () {
    function Student(姓, 名) {
        this.姓 = 姓;
        this.名 = 名;
        this.全名 = 姓 + 名;
    }
    return Student;
}());
function greeter(person) {
    return 'Hello, ' + person.姓 + person.名;
}
var user = new Student('林', '智兴');
document.body.innerHTML = greeter(user);

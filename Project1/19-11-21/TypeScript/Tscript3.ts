//Interface extends class
class Person {
    name: string;
}
interface Employee extends Person{
    code:number;
}
let emp1:Employee={ code:10,name:"sahil"}
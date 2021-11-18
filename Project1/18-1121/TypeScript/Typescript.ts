function greeter(person: string) {  
   
    let first: number = 12.0;             // number   
let second: number = 0x37CF;          // hexadecimal  
let third: number = 0o377 ;           // octal  
let fourth: number = 0b111001;        // binary 
 
  
console.log(first);           // 123  
console.log(second);          // 14287  
console.log(third);           // 255  
console.log(fourth);          // 57
return "Hello, " + person;
    
}  
var user : string= 'JavaTpoint';  
console.log(greeter(user));  
 
class Student  
{  
    RollNo: number;  
    Name: string;   
    constructor(RollNo: number, Name: string)   
    {  
        this.RollNo = RollNo;  
        this.Name = Name;  
    }  
    showDetails()  
    {  
        console.log(this.RollNo + " : " + this.Name);  
    }  
}  
export default Student;
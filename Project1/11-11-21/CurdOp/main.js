import employeedb from 'http://127.0.0.1:5500/11-11-21/CurdOp/module.js'
import { tableInsert } from 'http://127.0.0.1:5500/11-11-21/CurdOp/module.js';

let db=employeedb("Employeedb",{
    Employee:`++eid,ename,edep,esal,eaddr,ephone,email`

});

//input tag
const eid=document.getElementById("eid");
const ename=document.getElementById("ename");
const edep=document.getElementById("edep");
const esal=document.getElementById("esal");
const eaddr=document.getElementById("eaddr");
const ephone=document.getElementById("ephone");
const email=document.getElementById("email");

// input button 
const creatbtn=document.getElementById("creatbtn");
const readbtn=document.getElementById("readbtn");
const updatebtn=document.getElementById("updatebtn");
const deletebtn=document.getElementById("deletebtn");


//Insert value using Create button
creatbtn.onclick=(Event)=>{
    tableInsert(db.Employee,{
        ename:ename.value,
        edep:edep.value,
        esal:esal.value,
        eaddr:eaddr.value,
        ephone:ephone.value,
        email:email.value
    })
    
}
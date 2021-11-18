import employeedb from 'http://127.0.0.1:5500/15-11-21/CurdOp/module.js'
import { tableInsert ,getData,createEle} from 'http://127.0.0.1:5500/15-11-21/CurdOp/module.js';

let db=employeedb("Employeedb",{
    Employee:`eid,ename,edep,esal,eaddr,ephone,email`

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
        eid:eid.value,
        ename:ename.value,
        edep:edep.value,
        esal:esal.value,
        eaddr:eaddr.value,
        ephone:ephone.value,
        email:email.value
     } )
    //  eid.value=eid=ename.value=edep.value= esal.value =eaddr.value=ephone.value=email.value="";
     getData(db.Employee,(data)=>{
      eid.value= data.eid+1||1;
     });
      
}
  
//   delete record
deletebtn.onclick=()=>{
    db.delete();
    db=employeedb("Employeedb",{
        Employee:`eid,ename,edep,esal,eaddr,ephone,email`});
    
}

    
//Read button =>Create Dynamic element
readbtn.onclick=table;
 
function table(){
    const tbody=document.getElementById("tbody");
    while(tbody.hasChildNodes())
    {
        tbody.removeChild(tbody.firstChild);
    }

     getData(db.Employee,(data)=>{
        if(data)
        { //tr function
            createEle("tr",tbody,tr =>
            {
                for(const value in data){
                    createEle("td",tr,td=>{
                        td.textContent=data[value];
                    })
                    
                 }
                createEle("td",tr,td=>{
                    createEle("i",td,i=>
                    {
                        i.className +="fas fa-edit faedit";
                    
                    })
                   })
                    createEle("td",tr,td=>{
                    createEle("i",td,i=>
                    {
                      i.className +="fas fa-trash fadel";
                      i.setAttribute("data-eid",data.eid);
                      i.onclick = deletebtn;
                    })
                })
        })
        }
    })
  }

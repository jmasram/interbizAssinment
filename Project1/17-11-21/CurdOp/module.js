
   
   
   const employeedb =  (dbname,table) =>{
    //    create db
       const db= new Dexie("dbname");
       db.version(1).stores(table);
        db.open();
//     const db = new Dexie("myDb");
//     db.version(1).stores({
//          emplyoee: 'eid,ename,edep,esal,ephone,eaddr,eemail'
//   })
    
 return db;
}

//insert function
const tableInsert= (dbtable,data)=>{
   let flag=empty(data);
   if(flag){
   dbtable.bulkAdd([data]);
   console.log("datainserted");
   }
   else{
      colsole.log("Please provide data")
   }
   return flag;
}

//check textbox validation
const empty=object=>{
   let flag=false;
   for(const value in object)
   {
      if(object[value]!="" && object.hasOwnProperty(value))
      {
         flag=true;

      }
      else{
         flag=false;
      }
      return flag;
   }
}




  //Count Row in first item()
  const getData =(dbtable,fn)=>{
    
   let index=0;
   let obj={};   //blank object hear
   dbtable.count((count)=>{
       if(count){
       dbtable.each(table=>{
           obj=Sortobj(table);
           fn(obj,index++);
         })
      }
      else{
         fn(0);
      }
   })
}

//Sort  Object
const Sortobj=sortobj=>{
    let obj={};
    obj={
        eid:sortobj.eid,
        ename:sortobj.ename,
        edep:sortobj.edep,
        esal:sortobj.esal,
        eaddr:sortobj.eaddr,
        ephone:sortobj.ephone,
        email:sortobj.email

    }
     return obj;
}

//Create Dynamic Element
const createEle=(tagname,appendTo,fn)=>
               {  const element =document.createElement(tagname);
                  if(appendTo)appendTo.appendChild(element); // append to parentelement
                  
                  if(fn) fn(element);
               }

 export default employeedb;
 export{ tableInsert,
          getData,
         createEle}
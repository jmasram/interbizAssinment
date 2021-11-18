
   
   
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

//insert data
const tableInsert= (dbtable,data)=>{dbtable.tableInsert([data])}

 export default employeedb;
 export{ tableInsert}
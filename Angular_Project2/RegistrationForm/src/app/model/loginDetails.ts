export class LoginData{
    private email:string;
   private pwd:string;

   constructor(email:string,pwd:string){
       this.email=email;
       this.pwd=pwd;

   }
   getEmail():string{return this.email}
   getPwd():String{return this.pwd}
}
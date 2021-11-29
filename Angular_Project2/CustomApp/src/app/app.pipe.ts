import { Pipe ,PipeTransform } from "@angular/core";
// import { Transform } from "stream";

@Pipe({

   name:'custom'
})
export  class CustomPipe implements PipeTransform{


  // n:number=3;
  transform(n:number, extension:string='kilogram') {
        return (n*1000).toFixed(3)+ extension;
  }

}

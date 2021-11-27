import { Directive, ElementRef } from "@angular/core";

@Directive({
  selector:'[color]'
})
export class ChildDirective{

  constructor(e1:ElementRef)
  {
    e1.nativeElement.style.backgroundColor = 'green';
  }
}

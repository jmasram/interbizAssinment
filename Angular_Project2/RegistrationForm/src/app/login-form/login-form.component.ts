import { NgIf } from '@angular/common';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, PatternValidator, Validators } from '@angular/forms';
import { distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

 loginForm:FormGroup;

  loginUser(){
    // this.loginForm.setControl.name:'kkkk';
    console.log(this.loginForm.value)
  }


  constructor() {
    this.loginForm=new FormGroup({
      name:new FormControl('',[Validators.required, Validators.pattern(/^[a-zA-Z ]*$/)]),//we can use default value
      mname:new FormControl(''),
      lname:new FormControl('',[Validators.required]),
      email:new FormControl('' ,[Validators.required,Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]),
       mobno:new FormControl('',[Validators.required]),//Validators.pattern(/^(?=.*\d)(?=.*\w)(?=.*[@$!%*?&])[a-zA-Z\d@$!%*?&]$/) ]
      zipcode:new FormControl('',[Validators.required,Validators.pattern(/^[0-9]{6}$/), Validators.maxLength(6)]),
      password:new FormControl('',[Validators.required,Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[a-zA-Z\d@$!%*?&]{8,}$/)])
    })
    this.name?.valueChanges.subscribe((data)=>{
      console.log(this.name?.valid);

    })
    this.password?.valueChanges.subscribe((data)=>{
      console.log(this.password?.valid);

    })

    this.mobno?.valueChanges.
    pipe( distinctUntilChanged()).
    subscribe((data)=>{

      if(this.mobno?.value.length==3){
          this.mobno.setValue('('+this.mobno.value+')'+ " ");
      }
      else if(this.mobno?.value.length==9) {
        this.mobno.setValue(this.mobno.value+'-');
      }
      else if(this.mobno?.value.length===14) {
         this.mobno.setValue(this.mobno.value);

      }

      console.log(this.mobno?.value.length+ this.mobno?.value)
 })
  }

  get name() {return this.loginForm.get('name');}
  get lname(){return this.loginForm.get('lname');}
  get mobno(){ return this.loginForm.get('mobno');}
  get zipcode(){ return this.loginForm.get('zipcode')}
  get password() { return this.loginForm.get('password')}
  get email() {return this.loginForm.get('email');}


  ngOnInit(): void {
  console.log(this.name);
  }





}

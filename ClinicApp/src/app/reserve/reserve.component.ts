import { Component, OnInit } from '@angular/core';
import{RegisterService} from '../register.service'
import {Router} from '@angular/router'
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';


@Component({
  selector: 'app-reserve',
  templateUrl: './reserve.component.html',
  styleUrls: ['./reserve.component.css']
})
export class ReserveComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  constructor(private registerService:RegisterService , private router:Router ,private formBuilder: FormBuilder) {}
  
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      age: ['', Validators.required],
      doctor: ['', Validators.required]
      
  })
  
  }

  get f() { return this.registerForm.controls; }

    onSubmit(obj) {
        this.submitted = true;
      
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }

        /** + JSON.stringify(this.registerForm.value.name) + in case i want to type the name in ractive form */
        alert('SUCCESS!! \n An Email will be sent to you shortly' + JSON.stringify(this.registerForm.value.name) + '\n Thank you')
        this.registerService.addData(obj) 
    }
}
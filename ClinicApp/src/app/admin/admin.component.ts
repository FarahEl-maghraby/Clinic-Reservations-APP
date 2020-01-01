import { Component, OnInit } from '@angular/core';
import {Data} from '../dataModel'
import{RegisterService} from '../register.service'
import{ActivatedRoute,Router} from '@angular/router'


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  data : Data[] = []
  mydata : Data = {_id:'' ,   requestID: 0 , name: '' ,email: '', age: 0, doctor: '', description: '',status: false , img:''}
  constructor(private registerServices:RegisterService , private route:ActivatedRoute,private router:Router) {this.getPatients() }

  getPatients():void{
    this.registerServices.getAllData().subscribe(
      data=> {this.data = data}
    )
    }
   
    editStatus(id){
          this.registerServices.updateData(id,true).subscribe() 
          this.router.navigateByUrl('admin',{skipLocationChange:true})
    }
  
  deletePatient(id){
    this.registerServices.deleteData(id).subscribe()
    this.router.navigateByUrl('/',{skipLocationChange:true})
    .then(() =>{ this.router.navigate(['admin']) ,{skipLocationChange:true} })
  }
  ngOnInit() {
   this.getPatients()
  }

}

import { Component, OnInit } from '@angular/core';
import {Data} from '../dataModel'
import{RegisterService} from '../register.service'
import{ActivatedRoute,Router} from '@angular/router'
@Component({
  selector: 'app-clinic-requests',
  templateUrl: './clinic-requests.component.html',
  styleUrls: ['./clinic-requests.component.css']
})
export class ClinicRequestsComponent implements OnInit {

  data : Data = {_id:'' ,   requestID: 0 , name: '' ,email: '', age: 0, doctor: '', description: '',status: false, img:''}
  constructor(private registerServices:RegisterService , private route:ActivatedRoute,private router:Router) {this.getPatients()}
 
  getPatients():void{
    const status = this.route.snapshot.params.status
    this.registerServices.getSingleData(status).subscribe(
      data=> {this.data = data}
    )
    }
  ngOnInit() {
    this.getPatients() 
  }

}

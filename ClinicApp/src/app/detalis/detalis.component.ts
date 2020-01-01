import { Component, OnInit } from '@angular/core';
import {Data} from '../dataModel'
import{RegisterService} from '../register.service'
import{ActivatedRoute,Router} from '@angular/router'
import * as $ from 'node_modules/jquery/dist/jquery.js'

@Component({
  selector: 'app-detalis',
  templateUrl: './detalis.component.html',
  styleUrls: ['./detalis.component.css']
})
export class DetalisComponent implements OnInit {
  data1 : Data = {_id:'' ,   requestID: 0 , name: '' ,email: '', age: 0, doctor: '', description: '',status: false,img:''}
  constructor(private registerServices:RegisterService , private route:ActivatedRoute,private router:Router) { 
    this.getPatients()
    /*function readURL(input) {
      if (input.files && input.files[0]) {
        var reader = new FileReader();
        
        reader.onload = function(e) {
          $('#blah').attr('src', e.target.result);
        }
        
        reader.readAsDataURL(input.files[0]);
      }
    }
    
    $("#imgInp").change(function() {
      readURL(this);
    });*/
  

    $(function(){
      var container = $('.container'), inputFile = $('#file'), img, txt = 'Browse', txtAfter = 'Browse another pic';
          
      if(!container.find('#upload').length){
        container.prepend('<img src="" class="hidden" alt="Uploaded file" id="uploadImg" width="100">');
        img = $('#uploadImg');
      }
          
      inputFile.on('change', function(e){
        container.find('label').html( inputFile.val() );
        
        var i = 0;
        for(i; i < e.originalEvent.srcElement.files.length; i++) {
          var file = e.originalEvent.srcElement.files[i], 
            reader = new FileReader();
    
          reader.onloadend = function(){
            img.attr('src', reader.result).animate({opacity: 1}, 700);
          }
          reader.readAsDataURL(file);
        
        }
           
      });
    });
  }
 
  
  getPatients(){
    const id = this.route.snapshot.params.id
    this.registerServices.getByID(id).subscribe(
      data=> {this.data1 = data
      error => console.log(error)}
    )
    }

    
/*addClinicData(obj){
  this.registerServices.addClinic(obj)
}*/
    //In case he wants to edit data
    editPatient(updatedData){
      const id = this.route.snapshot.params.id
      this.registerServices.getByID(id).subscribe(
        data => {
          this.data1 = data
          this.registerServices.updateClinic(id,updatedData).subscribe()
  
        });
  
        //this.router.navigate(['/clinicadmin'])
    
      }
   
    
      
  ngOnInit() {
    this.getPatients()
  }

}

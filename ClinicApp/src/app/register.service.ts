import { Injectable } from '@angular/core';
import{Data} from './dataModel'
import{HttpClient} from'@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  data : Data[]
  constructor(private httpClient:HttpClient) { }
  baseURL= 'http://localhost:3000/'

  getAllData(){
     return this.httpClient.get<Data[]>(this.baseURL + 'data')
  }

  addData(data:Data)
  {
   return this.httpClient.post(this.baseURL + 'data' ,data).subscribe()
  }

  addClinic(data:Data)
  {
   return this.httpClient.post(this.baseURL + 'dataClinic' ,data).subscribe()
  }

  updateData(id:string , status:boolean){
  return this.httpClient.patch(this.baseURL + 'data/' + id , {status:true} )
  }

  getSingleData(status:boolean)
  {
  return  this.httpClient.get<Data>(this.baseURL + 'data/' + status)
  }

  deleteData(id:string){
    return this.httpClient.delete(this.baseURL + 'data/' + id)
  }

  updateClinic(id:string , data:any){
   return this.httpClient.patch(this.baseURL + 'data/' + id , data)
   }

   getByID(id:string){
     return this.httpClient.get<Data>(this.baseURL + 'dataClinic/' +id)
   }

}

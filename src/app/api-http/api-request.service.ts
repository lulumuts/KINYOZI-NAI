import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http'
import {environment } from '../../environments/environment'
import { Mane } from '../mane'

@Injectable({
  providedIn: 'root'
})
export class ApiRequestService {

    mane:Mane;

  constructor(private http: HttpClient) {
    this.mane=new Mane(0,"","");
  }
  apiRequest(){
    interface ApiResponse{
      id:any;
      photo:any;
      name:any;
  }
  let promise =new Promise((resolve,reject)=>{
      this.http.get<ApiResponse>(environment.apiUrl).toPromise().then(response=>{

           this.mane.id=response.id
           this.mane.photo=response.photo
           this.mane.name=response.name
           console.log(this.mane.photo)
           resolve()

      },
      error=>{
              this.mane.id=1
              this.mane.photo="https://kinyozi.herokuapp.com/media/posts/photo-afropunk-1.jpg"
              this.mane.name="whoopi goldberg"
              reject(error)

        }
      )
    })
    return promise
    

  }
}

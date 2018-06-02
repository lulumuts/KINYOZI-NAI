import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http'
import {environment } from '../../environments/environment'
import { Mane } from '../mane'

@Injectable({
  providedIn: 'root'
})
export class ApiRequestService {

    mane:Mane;
    manes:Mane[];

  constructor(private http: HttpClient) {
    this.mane=new Mane(0,"","",0,0,0);
  }
  apiRequest(){
    interface ApiResponse{
      id:any;
      photo:any;
      name:any;
      style:any;
      location:any;
      cost:any;
  }
  let promise =new Promise((resolve,reject)=>{
          this.http.get<ApiResponse[]>(environment.apiUrl).toPromise().then(response=>{
          console.log(response)


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

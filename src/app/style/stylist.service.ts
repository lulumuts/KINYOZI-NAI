import { Injectable } from '@angular/core';
import { Mane } from '../mane'
import { HttpClient } from '@angular/common/http'
import {environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class StylistService {

  mane:Mane;
  manes:Mane[];

  constructor(private http: HttpClient) {
     this.mane=new Mane(0,"",0);
   }
   apiRequest(){
     interface ApiResponse{
       id:any;
       img:any;
       hair_type:any;
   }
   let promise =new Promise((resolve,reject)=>{
       this.http.get<ApiResponse[]>(environment.apiUrl).toPromise().then(response=>{
            console.log(response)

            resolve()

       },
       error=>{
               this.mane.id=1
               this.mane.img="https://kinyozi.herokuapp.com/media/posts/photo-afropunk-1.jpg"
               this.mane.hair_type=3
               reject(error)

         }
       )
     })
     return promise


   }
 }

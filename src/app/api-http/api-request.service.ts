import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule,HttpHeaders } from '@angular/common/http'
import {environment } from '../../environments/environment';
import { Headers } from '@angular/http';
import { Mane } from '../mane'
import { Observable } from "rxjs";
import { map, catchError } from 'rxjs/operators';


const httpOptions = {
    headers:new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization':'5badbe409aa02b6ee6743fbde33fb9cdc9f3d29e',
    })
  };


@Injectable({
  providedIn: 'root'
})
export class ApiRequestService {

    mane:any;
    manes:Mane[];
    _baseUrl: string='';



  constructor(private http: HttpClient) {
    this.manes=[];
    this._baseUrl ="https://kinyozi.herokuapp.com";

  }


  apiRequest(){
    interface ApiResponse{
      id:any;
      img:any;
      hair_type:any;

  }
  let promise =new Promise((resolve,reject)=>{
      this.http.get<ApiResponse>(environment.apiUrl).toPromise().then(response=>{


           this.mane=response
           console.log(this.mane)
           this.mane.forEach(m=>{
             this.manes.push(new Mane(m.id,m.img, m.hair_type))
             console.log(m)

           })
           resolve()

      },
      error=>{
              this.manes=[]
              reject(error)

        }
      )
    return promise
    })

    }

  }

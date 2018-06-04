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

  constructor() {

  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, of } from 'rxjs';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';

import { MessageService } from './message.service';

interface myData {
  id:number;
  photo:string;
  name:string;
}
@Injectable({
  providedIn: 'root'
})
export class HairService {


  constructor(private messageService: MessageService,private http: HttpClient) { }

  getHeroes(): Observable<Hero[]> {


    return of(HEROES);
  }
  getHero(id: number): Observable<Hero> {


    return of(HEROES.find(hero => hero.id === id));
  }

}

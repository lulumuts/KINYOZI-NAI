import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, of } from 'rxjs';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';

import { MessageService } from './message.service';
<<<<<<< HEAD
import { HttpClient, HttpHeaders } from '@angular/common/http';

=======

interface myData {
  id:number;
  photo:string;
  name:string;
}
>>>>>>> 783dad3dbfaa7cfb1ea5d1fc299408002a733298
@Injectable({
  providedIn: 'root'
})
export class HairService {


<<<<<<< HEAD
  constructor(private http: HttpClient, private messageService: MessageService) { }
=======
  constructor(private messageService: MessageService,private http: HttpClient) { }
>>>>>>> 783dad3dbfaa7cfb1ea5d1fc299408002a733298

  getHeroes(): Observable<Hero[]> {

    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }
  getHero(id: number): Observable<Hero> {
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }

  // getData() {
  //   return this.http.get('https://kinyozi.herokuapp.com/api/stylist/')
  //   .subscribe(data => {
  //     console.log("We got", data)
  //   })
  // }


}

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Hero } from '../hero';
import { HairService } from '../hair.service'
import { ApiRequestService } from '../api-http/api-request.service'
import { Mane } from '../mane';

@Component({
  selector: 'app-hair',
  templateUrl: './hair.component.html',
  providers:[HairService,ApiRequestService],
  styleUrls: ['./hair.component.css']
})
export class HairComponent implements OnInit {

selectedHero: Hero;

heroes: Hero[];

mane:Mane;

manes: Mane[]=[];

  constructor(private hairService: HairService,private apiService: ApiRequestService) {}



  ngOnInit() {


    this.getHeroes();

    this.apiService.apiRequest()
    this.mane=this.apiService.mane
    console.log(this.mane)

  }
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.hairService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);

  }
  apiRequest(): void {
     this.apiService.apiRequest()
      .subscribe(manes => {
        this.parseData(manes);
      });
   }

  parseData(jsonData: string) {
  //considering you get your data in json arrays
  for (let i = 0; i < jsonData[1].length; i++) {
       const manes = new apiRequest(jsonData[1][i], jsonData[2][i]);
       this.apiRequest.push(manes);
  }
}

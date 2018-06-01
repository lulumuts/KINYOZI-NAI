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


  constructor(private hairService: HairService,private apiService: ApiRequestService) { }

  ngOnInit() {

    this.apiService.apiRequest()
    this.mane=this.apiService.mane
    console.log(this.mane)
    
    this.getHeroes();
  }
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.hairService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }

  }

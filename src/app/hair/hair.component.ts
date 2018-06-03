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



  constructor(private hairService: HairService,private apiService: ApiRequestService) {}


  ngOnInit() {

    this.getHeroes();

  }


  getHeroes(): void {
    this.hairService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);


  }

}

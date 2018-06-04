import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Hero } from '../hero';
import { HairService } from '../hair.service'



@Component({
  selector: 'app-hair',
  templateUrl: './hair.component.html',
  providers:[],
  styleUrls: ['./hair.component.css']
})
export class HairComponent implements OnInit {

selectedHero: Hero;

heroes: Hero[];




  constructor(private hairService: HairService) {}


  ngOnInit() {

    this.getHeroes();

  }


  getHeroes(): void {
    this.hairService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);



  }

}

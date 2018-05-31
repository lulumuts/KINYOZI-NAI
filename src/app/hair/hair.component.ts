import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HairService } from '../hair.service';


@Component({
  selector: 'app-hair',
  templateUrl: './hair.component.html',
  styleUrls: ['./hair.component.css']
})
export class HairComponent implements OnInit {

  selectedHero: Hero;

  heroes: Hero[];


  constructor(private hairService: HairService) { }

  ngOnInit() {
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

import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HairService } from '../hair.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {

  heroes: Hero[]=[];




  constructor(private hairService: HairService) { }

  ngOnInit() {
    this.getHeroes();

  }



  getHeroes(): void {
    this.hairService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }
}

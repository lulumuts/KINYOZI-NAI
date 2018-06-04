import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HairService } from '../hair.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
<<<<<<< HEAD
  heroes: Hero[]=[];
=======
  heroes: Hero[] = [];
>>>>>>> 424d63719f976c5818997ec0f6b875664e507558

  constructor(private hairService: HairService) { }

  ngOnInit() {
    this.getHeroes();
<<<<<<< HEAD
  }

  getHeroes(): void{
    this.hairService.getHeroes()
        .subscribe(heroes => this.heroes = heroes.slice(1, 5));
=======
>>>>>>> 424d63719f976c5818997ec0f6b875664e507558
  }

  getHeroes(): void {
    this.hairService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }
}

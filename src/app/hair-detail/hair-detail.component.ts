import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { HairService }  from '../hair.service';


@Component({
  selector: 'app-hair-detail',
  templateUrl: './hair-detail.component.html',
  styleUrls: ['./hair-detail.component.css']
})
export class HairDetailComponent implements OnInit {

  @Input() hero: Hero;

  constructor(private route: ActivatedRoute, private hairService: HairService, private location: Location) { }

  ngOnInit(): void {
    this.getHero();

  }
  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.hairService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

}

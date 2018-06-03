import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HairService }  from '../hair.service';
import { Mane } from '../mane';


@Component({
  selector: 'app-hair-detail',
  templateUrl: './hair-detail.component.html',
  styleUrls: ['./hair-detail.component.css']
})
export class HairDetailComponent implements OnInit {
  newMane=new Mane(0,"","");
  
  @Input() hero: Hero;
  @Output() addMane=new EventEmitter<Mane>();

  submitHandler(){
    this.addMane.emit(this.newMane);
  }

  constructor(private route: ActivatedRoute, private hairService: HairService, private location: Location) { }

  ngOnInit(): void {
    this.getHero();

  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.hairService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
  this.location.back();
}

}

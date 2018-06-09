import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HairService }  from '../hair.service';
import { StylistService } from '../style/stylist.service';
import { ApiRequestService } from '../api-http/api-request.service'
import { Mane } from '../mane';



@Component({
  selector: 'app-hair-detail',
  templateUrl: './hair-detail.component.html',
  styleUrls: ['./hair-detail.component.css']
})
export class HairDetailComponent implements OnInit {

  hero:Hero;
  newMane=new Mane(0,"",0);

  mane:Mane;

  manes:Mane[]=[];


  submitHandler(){

  }

  constructor(private route: ActivatedRoute, private hairService: HairService, private location: Location,private stylistService: StylistService) { }

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

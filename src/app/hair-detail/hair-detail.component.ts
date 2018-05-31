import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
@Component({
  selector: 'app-hair-detail',
  templateUrl: './hair-detail.component.html',
  styleUrls: ['./hair-detail.component.css']
})
export class HairDetailComponent implements OnInit {

  @Input() hero: Hero;

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { ApiRequestService } from '../api-http/api-request.service'
import { Mane } from '../mane';


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  newMane=new Mane(0,"",0);

  mane:Mane;

  manes:Mane[]=[];

  constructor(private apiService: ApiRequestService) { }

  ngOnInit() {

    this.apiService.apiRequest()
    this.manes=this.apiService.manes;
    console.log(this.manes)

  }

}

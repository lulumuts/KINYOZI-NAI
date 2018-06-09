import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormControl,Validators } from '@angular/forms'

import { Mane } from '../mane';
import { tap, first } from 'rxjs/operators'

@Component({
  selector: 'app-hair-form',
  templateUrl: './hair-form.component.html',
  styleUrls: ['./hair-form.component.css']
})
export class HairFormComponent implements OnInit {

  heroForm:FormGroup;


  constructor(private fb: FormBuilder) {
    this.createForm();
  }
  createForm(){
    this.heroForm=this.fb.group({
      email:['', Validators.required],
      message: '',
    });
  }
  ngOnInit() {

  }

  }

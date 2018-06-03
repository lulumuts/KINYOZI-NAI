import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormControl,Validators } from '@angular/forms'
import { AngularFirestore } from 'angularfire2/firestore';
import { FirebaseService } from '../fire/firebase.service';
import { Mane } from '../mane';
import { tap, first } from 'rxjs/operators'

@Component({
  selector: 'app-hair-form',
  templateUrl: './hair-form.component.html',
  styleUrls: ['./hair-form.component.css']
})
export class HairFormComponent implements OnInit {




  constructor(private fireService: FirebaseService, private fb: FormBuilder, private afs: AngularFirestore) {

  }

  ngOnInit() {

  }

  }

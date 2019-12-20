import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, ObservedValueOf } from 'rxjs';
import { Tutorial } from './../models/tutorial.model';
import { AppState } from '../app.state';
import { RemoveTutorial } from '../actions/tutorial.action';


@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss']
})
export class ReadComponent implements OnInit {

  tutorials: Observable<Tutorial[]>;          // store returns an observable of specific type, here type is Tutorial[]

  constructor(private store: Store<AppState>) { 
    this.tutorials = store.select('tutorial');
  }

  ngOnInit() {
  }

  removeTutorial(index){
    this.store.dispatch(new RemoveTutorial(index));
  }

}

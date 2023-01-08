import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Decrement, Increment } from './store/actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ngrx-app';
  counter$: Observable<number>;
  constructor(private store: Store<{ counter: number }>) {
    this.counter$ = store.select('counter');
  }
  increment() {
    this.store.dispatch(new Increment());
  }
  decrement() {
    this.store.dispatch(new Decrement());
  }
}

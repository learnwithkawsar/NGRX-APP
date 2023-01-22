import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { select, Store } from '@ngrx/store';
import { setAPIStatus } from 'src/app/shared/store/app.action';
import { selectAppState } from 'src/app/shared/store/app.selector';
import { Appstate } from 'src/app/shared/store/appstate';
import { invokeBooksAPI, invokeDeleteBookAPI } from '../store/books.action';
import { selectBooks } from '../store/books.selector';
import { Modal } from 'bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements AfterViewInit {
  books$ = this.store.pipe(select(selectBooks));
  //deleteModal: any;
  idToDelete: number = 0;
  @ViewChild('deleteModal', { static: true })
  deleteModal!: ElementRef;
  deleteModalObj: any;

  constructor(private store: Store, private appStore: Store<Appstate>) {
    // this.deleteModal = undefined;
  }

  ngAfterViewInit(): void {
    this.deleteModalObj = new Modal(this.deleteModal.nativeElement);
    // let modal = new Modal(this.deleteModal.nativeElement);
    //this.deleteModal = modal;
    // this.deleteModal = new window.bootstrap.Modal(
    //   this.deleteModal.nativeElement
    // );
    this.store.dispatch(invokeBooksAPI());
  }
  openDeleteModal(id: number) {
    this.idToDelete = id;
    this.deleteModalObj.show();
  }
  delete() {
    this.store.dispatch(
      invokeDeleteBookAPI({
        id: this.idToDelete,
      })
    );
    let apiStatus$ = this.appStore.pipe(select(selectAppState));
    apiStatus$.subscribe((apState) => {
      console.log(apState);
      if (apState.apiStatus == 'success') {
        this.deleteModalObj.hide();
        this.appStore.dispatch(
          setAPIStatus({ apiStatus: { apiResponseMessage: '', apiStatus: '' } })
        );
      }
    });
  }
}

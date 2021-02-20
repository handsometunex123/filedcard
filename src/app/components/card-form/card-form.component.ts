import { CardDataService } from './../../services/card-data.service';
import { CardApiService } from './../../services/card-api.service';
import { Notification } from './../notification/notification.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { Card } from 'src/app/models/cards.model';
import { environment } from 'src/environments/environment';
import { AppState } from './../../app.state';
import * as moment from 'moment';
import IMask from 'imask';
import * as CardActions from './../../actions/cards.action'
import { MessagingService } from '../notification/messaging.service';
import { HttpErrorResponse } from '@angular/common/http';
import { RouteConfigLoadEnd, Router } from '@angular/router';
@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.scss']
})
export class CardFormComponent implements OnInit, OnDestroy {
  companyName = 'Filed.com';
  subscription = new Subscription();
  isLoading = false;
  cardForm: FormGroup;
  public notifications: Notification = {};
  currentDate = moment().toDate();
  currentMonth = Number(moment(this.currentDate).format('MM'));
  currentYear = Number(moment(this.currentDate).format('YY'));
  cards$: Observable<Card>;
  formSubmit = false;
  constructor(private fb: FormBuilder, private messaging: MessagingService,
    private router: Router,
    private cardapi: CardApiService, private store: Store<AppState>, private cardDataService: CardDataService) {
    this.cards$ = store.select('card');
    this.cardDataService.submittedCardData$.next(this.cards$);
  }


  ngOnInit(): void {
    this.createCardForm();
    console.log(moment(this.currentDate).format('MM-YY'));
    this.cardForm.valueChanges.subscribe(t => {
      console.log(t);
      this.cardDataService.formchangesAction$.next(t);
    })
  }

  checkExpiryDate() {
    console.log('here');
    if (this._expiration.value) {
      const expireValue = this._expiration.value.split("/");
      const month = Number(expireValue[0]);
      const year = Number(expireValue[1]);
      console.log(this.currentMonth);
      if ((month > 12 || month <= 0) || (month <= this.currentMonth && year <= this.currentYear) || (year < this.currentYear)) {
        this._expiration.setErrors({ 'dateNotCorrect': true })
        return false;
      }
      return true;
    }
  }




  createCardForm() {
    this.cardForm = this.fb.group({
      name: [null, [Validators.required, Validators.pattern(environment.textOnlyRegex)]],
      cardno: [null, [Validators.required, Validators.minLength(19)]],
      expiration: [null, [Validators.required, Validators.minLength(5)]],
      cvv: [null, [Validators.minLength(3), Validators.maxLength(3)]],
      amount: [null, [Validators.required, Validators.pattern(environment.amount)]]
    })
  }


  
  get _cardno() { return this.cardForm.get('cardno') }
  get _name() { return this.cardForm.get('name') }
  get _expiration() { return this.cardForm.get('expiration') }
  get _cvv() { return this.cardForm.get('cvv') }
  get _amount() { return this.cardForm.get('amount') }
  get _id() { return this.cardForm.get('id') }



  submitForm() {
    this.isLoading = true;
    console.log(this.cardForm.value);
    this.cardForm.markAllAsTouched();
    if (this.cardForm.valid) {
      this.cardDataService.formSubmitted$.next(true);
      this.flipCard();
      console.log(this.cardForm.value);
      this.cardDataService.cardRequestAction.next({ ...this.cardForm.value, id: this.cardForm.value.id++ });
      this.cardDataService.submitCard$.subscribe(
        (res) => {
          this.setLoaderTimeOut(3000);
          console.log(res);
          this.messaging.setMessage({
            type: 'success',
            title: 'success',
            body: 'Card details posted successfully'
          });
        }, (err: HttpErrorResponse) => {
          console.log(err.message);        
          this.messaging.setMessage({
            type: 'error',
            title: 'error',
            body: `Card details could not be posted because, ${err.message}`
          });
          this.setLoaderTimeOut(3000);
        });
      this.store.dispatch(new CardActions.SaveCard({ ...this.cardForm.value }));
    } else {
      this.isLoading = false;
      this.messaging.setMessage({
        type: 'error',
        title: 'Form Not Valid',
        body: 'Please confirm that all input were properly provided'
      });
    }
  }

  flipCard() {
    this.cardDataService.flipAction$.next('flipped');
  }

  resetForm(){
    this.cardForm.reset();
  }


  setLoaderTimeOut(duration: number) {
    setTimeout(() => {
      this.isLoading = false;
    }, duration);
  }

  unflipCard() {
    this.cardDataService.flipAction$.next('unflipped');
  }

  //On Focus Events
  cvvPressed() {
    this.unflipCard();
  }

  expireDatePressed() {
    this.flipCard();
  }


  cardNoPressed() {
    this.flipCard();
  }

  namePressed() {
    this.flipCard();
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}



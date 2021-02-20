import { CardApiService } from './card-api.service';
import { Card } from 'src/app/models/cards.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { filter, shareReplay, switchMap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CardDataService {
  cardRequestAction = new BehaviorSubject<Card>(null);
  formchangesAction$ = new BehaviorSubject<Card>(null);
  flipAction$ = new BehaviorSubject<string>('flipped');
  formSubmitted$ = new BehaviorSubject<Boolean>(false);
  // toggleCardColor$ = new BehaviorSubject<Boolean>(false);
  submittedCardData$ = new BehaviorSubject<Observable<Card>>(null);
  constructor(private cardsAPI: CardApiService) { }

  submitCard$ = this.cardRequestAction.pipe(
    filter((card) => Boolean(card)),
    switchMap((card) => this.cardsAPI.create(card)),
    shareReplay(1)
  );
}

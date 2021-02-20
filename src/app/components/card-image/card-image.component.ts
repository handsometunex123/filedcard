import { Card } from 'src/app/models/cards.model';
import { CardDataService } from './../../services/card-data.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-card-image',
  templateUrl: './card-image.component.html',
  styleUrls: ['./card-image.component.scss']
})
export class CardImageComponent implements OnInit, OnDestroy {
  companyName = 'Filed.com';
  ccsingle = document.getElementById('ccsingle');
  formChanges: Card;
  subscription = new Subscription();
  constructor(public cardService: CardDataService) { }

  ngOnInit(): void {
    const submitted = this.cardService.formSubmitted$.getValue();
    this.subscription.add(this.cardService.formchangesAction$.subscribe((res) => { this.formChanges = res }));
    this.clickToggle();
    this.subscription.add(this.cardService.flipAction$.subscribe((res) => {
      if (res === 'flipped') {
        document.querySelector('.creditcard').classList.remove('flipped');
      } else if (res === 'unflipped') {
        document.querySelector('.creditcard').classList.add('flipped');
      }
    }
    ))
  }



  clickToggle() {
    // this.cardService.formchangesAction$.subscribe(res=>{this.formChanges = res}) "
    document.querySelector('.preload').classList.remove('preload');
    document.querySelector('.creditcard').addEventListener('click', function () {
      if (this.classList.contains('flipped')) {
        this.classList.remove('flipped');
      } else {
        this.classList.add('flipped');
      }
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }



}

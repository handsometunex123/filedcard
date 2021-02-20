import { CardDataService } from './../../services/card-data.service';
import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-card-container',
  templateUrl: './card-container.component.html',
  styleUrls: ['./card-container.component.scss']
})
export class CardContainerComponent implements OnInit {

  constructor(public cardData: CardDataService, public _location: Location) { }

  ngOnInit(): void {
  }

  goBack(){
    this._location.back();
  }

}

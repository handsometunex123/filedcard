import { CardDataService } from './services/card-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'filed-card';
  constructor(public cardData: CardDataService){}

  ngOnInit(){

  }
}



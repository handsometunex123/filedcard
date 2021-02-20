import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quick-loader',
  templateUrl: './quick-loader.component.html',
  styleUrls: ['./quick-loader.component.scss']
})
export class QuickLoaderComponent implements OnInit {

  @Input() loaderText: string;
  constructor(private router: Router) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.router.navigate(['card-generation']);
    }, 10000);
    this.loaderText = 'Please wait while we set up your environment...'
  }

}

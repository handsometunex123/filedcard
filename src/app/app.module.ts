import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardFormComponent } from './components/card-form/card-form.component';
import { CardContainerComponent } from './components/card-container/card-container.component';
import { ReactiveFormsModule } from '@angular/forms';
import { IMaskModule } from 'angular-imask';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import {reducer} from './reducers/cards.reducer';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { QuickLoaderComponent } from './components/quick-loader/quick-loader.component';
import { CardDetailsComponent } from './components/card-details/card-details.component';
import { NotificationComponent } from './components/notification/notification.component';
import { CardImageComponent } from './components/card-image/card-image.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
@NgModule({
  declarations: [
    AppComponent,
    CardFormComponent,
    CardContainerComponent,
    QuickLoaderComponent,
    CardDetailsComponent,
    NotificationComponent,
    CardImageComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    IMaskModule,
    HttpClientModule,
    CurrencyMaskModule,
    StoreModule.forRoot({
      card: reducer
    })
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

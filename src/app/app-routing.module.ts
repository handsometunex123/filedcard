import { QuickLoaderComponent } from './components/quick-loader/quick-loader.component';
import { CardDetailsComponent } from './components/card-details/card-details.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CardContainerComponent } from './components/card-container/card-container.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  {path: 'splash-screen', component: QuickLoaderComponent},
  { path: 'card-generation', component: CardContainerComponent }, 
  {path: 'card-details', component: CardDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

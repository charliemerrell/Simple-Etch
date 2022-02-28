import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanActivateAppService } from './can-activate-app.service';
import { LoginComponent } from './login/login.component';
import { ViewAllCardsComponent } from './view-all-cards/view-all-cards.component';

const routes: Routes = [
  {
    path: 'cards',
    component: ViewAllCardsComponent,
    canActivate: [CanActivateAppService],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

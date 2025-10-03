import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Orders } from './orders/orders';
import { PaymentHistory } from './payment-history/payment-history';
import { Cart } from './cart/cart';
import { Profile } from './profile/profile';
import { UserDashboard } from './user-dashboard/user-dashboard';

const routes: Routes = [
  { path: 'UserDashboard', component: UserDashboard, pathMatch: 'full' },
  { path: 'Orders', component: Orders, pathMatch: 'full' },
  { path: 'PaymentHistory', component: PaymentHistory, pathMatch: 'full' },
  { path: 'Cart', component: Cart, pathMatch: 'full' },
  { path: 'Profile', component: Profile, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }

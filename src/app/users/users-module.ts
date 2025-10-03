import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users-routing-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Orders } from './orders/orders';
import { Cart } from './cart/cart';
import { PaymentHistory } from './payment-history/payment-history';
import { Profile } from './profile/profile';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { PipeServivePipe } from '../../Service/pipe-servive-pipe';
import { UserDashboard } from './user-dashboard/user-dashboard';


@NgModule({
  declarations: [
    Orders,
    Cart,
    PaymentHistory,
    Profile,
    UserDashboard
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxChartsModule,
    PipeServivePipe
]
})
export class UsersModule { }

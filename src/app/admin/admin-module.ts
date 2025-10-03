import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminDashboard } from './admin-dashboard/admin-dashboard';
import { ProductManagement } from './product-management/product-management';
import { ProfileSettings } from './profile-settings/profile-settings';
import { ReportAnalysis } from './report-analysis/report-analysis';
import { UserManagement } from './user-management/user-management';
import { NgxChartsModule } from '@swimlane/ngx-charts';




@NgModule({
  declarations: [
    AdminDashboard,
    ProductManagement,
    ProfileSettings,
    ReportAnalysis,
    UserManagement,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgxChartsModule
]
})
export class AdminModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboard } from './admin-dashboard/admin-dashboard';
import { ProductManagement } from './product-management/product-management';
import { ProfileSettings } from './profile-settings/profile-settings';
import { ReportAnalysis } from './report-analysis/report-analysis';
import { UserManagement } from './user-management/user-management';

const routes: Routes = [
  { path: 'AdminDashboard', component: AdminDashboard, pathMatch: 'full' },
  { path: 'ProductManagement', component: ProductManagement, pathMatch: 'full' },
  { path: 'ProfileSettings', component: ProfileSettings, pathMatch: 'full' },
  { path: 'ReportAnalysis', component: ReportAnalysis, pathMatch: 'full' },
  { path: 'UserManagement', component: UserManagement, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

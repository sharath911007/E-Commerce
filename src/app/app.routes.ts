import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Sidebar } from './sidebar/sidebar';

export const routes: Routes = [
    { path: '', redirectTo: 'Login', pathMatch: 'full' },
    { path: 'Login', component: Login, pathMatch: 'full' },
    { path: 'Admin', loadChildren: () => import('../app/admin/admin-module').then(m => m.AdminModule) },
    { path: 'User', loadChildren: () => import('../app/users/users-module').then(m => m.UsersModule) },
    { path: 'SideBar', component: Sidebar, pathMatch: 'full' },
    { path: 'Header', component: Headers, pathMatch: 'full' }
];

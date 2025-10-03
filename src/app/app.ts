import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Loaderservice } from '../Service/loaderservice';
import { Sidebar } from './sidebar/sidebar';
import { Header } from './header/header';

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [RouterOutlet,CommonModule,FormsModule,Sidebar,Header],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('ECommerce');

  constructor(public loaderService:Loaderservice){}
}

import { Component, OnInit } from '@angular/core';
import { Loaderservice } from '../../Service/loaderservice';
import { Router, TitleStrategy } from '@angular/router';
import { Apiservice } from '../../Service/apiservice';
import { combineLatest } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule, FormsModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss'
})
export class Sidebar implements OnInit {
  role: any;

  constructor(public loaderService: Loaderservice, public route: Router, public apiService: Apiservice) { }

  ngOnInit(): void {
    this.role = sessionStorage.getItem('role');
    console.log(`role`, this.role);
  }

  navigate(data: any,menuID:any) {
    this.route.navigate([data]);
    this.loaderService.menuID = menuID;
    sessionStorage.setItem('menuID',menuID)
  }
}

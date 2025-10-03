import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Loaderservice } from '../../Service/loaderservice';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  imports: [CommonModule, FormsModule],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header implements OnInit {

  userName: any;
  adminName: any;
  role: any;
  dropdownOpen = false;
  selectedLanguage = 'ind';
  selectedFlag = '../../assets/icons/india.png';
  selectedLanguageName = 'India';

  constructor(public route: Router, public loaderService: Loaderservice) { }

  ngOnInit(): void {
    this.role = sessionStorage.getItem('role');
    console.log(`header`, this.role);
    if (this.role == 'Admin') {
      this.adminName = sessionStorage.getItem('adminName');
      this.userName = '';
      console.log(`aa`, this.adminName)
    } else if (this.role = 'User') {
      this.userName = sessionStorage.getItem('userName');
      this.adminName = '';
    }
  }

  navigate(comp: any) {
    this.route.navigate([comp]);
  }
  exit() {
    sessionStorage.clear();
    this.route.navigate(['/Login']);
  }


  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  changeLanguage(lang: string) {
    if (lang === 'ind') {
      this.selectedLanguage = 'ind';
      this.selectedFlag = '../../assets/icons/india.png';
      this.selectedLanguageName = 'India';
    } else if (lang === 'ger') {
      this.selectedLanguage = 'ger';
      this.selectedFlag = '../../assets/icons/germany.png';
      this.selectedLanguageName = 'Germany';
    } else if (lang === 'usa') {
      this.selectedLanguage = 'usa';
      this.selectedFlag = '../../assets/icons/usa.png';
      this.selectedLanguageName = 'USA';
    }
    this.dropdownOpen = false;
  }
}

import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Loaderservice } from '../../Service/loaderservice';
import { Router } from '@angular/router';
import { Apiservice } from '../../Service/apiservice';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login implements OnInit {


  role: any = ''
  roleData: any[] = [];
  adminData: any[] = [];
  ID: any = '';
  password: any = '';
  userData: any[] = [];

  constructor(public loaderService: Loaderservice, public router: Router, public apiService: Apiservice) { }


  async ngOnInit() {
    const roleRes = await this.apiService.commonGetCall(`http://localhost:4199/Admin/GetRole`);
    this.roleData = roleRes.data;
    const adminRes = await this.apiService.commonGetCall(`http://localhost:4199/Admin/GetAdmin`);
    this.adminData = adminRes.data;
    const userRes = await this.apiService.commonGetCall(`http://localhost:4199/Admin/GetUsers`);
    this.userData = userRes.data;
  }

  onLogin() {
    if (this.role == 'Admin') {
      const adminCred = this.adminData.find(
        check => check.adminName === this.ID && check.adminPassword === this.password
      );
      if (adminCred) {
        this.router.navigate(['/Admin/AdminDashboard']);
        this.loaderService.isLogin = 'yes';
        sessionStorage.setItem('isLogin', 'yes');
        sessionStorage.setItem('role', 'Admin');
        sessionStorage.setItem('AdminID', adminCred.id);
        sessionStorage.setItem('adminName', adminCred.adminName)
      } else {
        Swal.fire('InCorrect Admin Cred');
        this.loaderService.isLogin = 'no';
      }
    } else if (this.role == 'Users') {
      const userCred = this.userData.find(check => check.userName == this.ID && check.userPassword == this.password);
      if (userCred) {
        this.router.navigate(['Users/Dashboard']);
        this.loaderService.isLogin = 'yes';
        sessionStorage.setItem('isLogin', 'yes');
        sessionStorage.setItem('role', 'User');
        sessionStorage.setItem('userName', userCred.userName)
      } else {
        Swal.fire('Incorrect User Cred');
        this.loaderService.isLogin = 'no';
      }

    }

  }
}

import { Component, OnInit } from '@angular/core';
import { Apiservice } from '../../../Service/apiservice';
import { Loaderservice } from '../../../Service/loaderservice';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-management',
  standalone: false,
  templateUrl: './user-management.html',
  styleUrl: './user-management.scss'
})
export class UserManagement implements OnInit {

  usersData: any[] = [];

  constructor(public apiService: Apiservice, loaderService: Loaderservice) { }


  ngOnInit(): void {
    this.getUserData();
  }

  async getUserData() {
    const res = await this.apiService.commonGetCall(`http://localhost:4199/Admin/GetUsers`);
    this.usersData = res.data;
  }

  async deleteUsers(ID: any) {
    const res = await Swal.fire({
      title: 'Are You Sure To Delete',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'Cancel'
    });
    if (res.isConfirmed) {
      await this.apiService.commonGetCall(`http://localhost:4199/Admin/DeleteUsers?ID=${ID}`);
      Swal.fire('User has been deleted');
    } else {
      Swal.fire('User Not Deleleted')
    };
    this.getUserData();
  }
}

import { Component, OnInit } from '@angular/core';
import { Apiservice } from '../../../Service/apiservice';
import { Loaderservice } from '../../../Service/loaderservice';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { gridSize } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-profile-settings',
  standalone: false,
  templateUrl: './profile-settings.html',
  styleUrl: './profile-settings.scss'
})
export class ProfileSettings implements OnInit {

  adminID: any;
  adminData: any;
  adminForm!: FormGroup;
  updateForm! : FormGroup;

  constructor(public apiService: Apiservice, public loaderService: Loaderservice, public modalService: NgbModal) { }


  ngOnInit(): void {
    this.adminID = sessionStorage.getItem('AdminID');
    console.log('id', this.adminID);
    this.getAdminByID();
    this.clearForm();
  }

  clearForm() {
    this.adminForm = new FormGroup({
      ID: new FormControl(''),
      RoleID: new FormControl('1'),
      AdminName: new FormControl('', Validators.required),
      AdminPassword: new FormControl('', Validators.required),
      Email: new FormControl('', Validators.required),
      PhoneNumber: new FormControl('', Validators.required)
    })
  }

  async getAdminByID() {
    const res = await this.apiService.commonGetCall(`http://localhost:4199/Admin/GetAdminByID?ID=${this.adminID}`);
    this.adminData = res.data[0];
    this.updateForm = new FormGroup({
      ID: new FormControl(this.adminData.ID || ''),
      RoleID: new FormControl(this.adminData.roleID || '1'),
      AdminName: new FormControl(this.adminData.adminName || '', Validators.required),
      AdminPassword: new FormControl(this.adminData.adminPassword || '', Validators.required),
      Email: new FormControl(this.adminData.email || '', Validators.required),
      PhoneNumber: new FormControl(this.adminData.phoneNumber || '', Validators.required)
    });
    console.log(this.adminData)
  }

  async openModal(popup: any) {
    this.modalService.open(popup, { centered: true, size: 'xl' });
    this.clearForm();

  }
}

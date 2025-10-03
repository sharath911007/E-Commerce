import { Component, OnInit } from '@angular/core';
import { Apiservice } from '../../../Service/apiservice';
import { Loaderservice } from '../../../Service/loaderservice';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-product-management',
  standalone: false,
  templateUrl: './product-management.html',
  styleUrl: './product-management.scss'
})
export class ProductManagement implements OnInit {

  productsData: any[] = [];
  productsForm!: FormGroup;
  imagePath: any = '';

  constructor(public apiService: Apiservice, public loaderService: Loaderservice, public modalService: NgbModal) { }

  ngOnInit(): void {
    this.getProductsData();
    this.clearForm();
  }

  clearForm() {
    this.productsForm = new FormGroup({
      ID: new FormControl(''),
      ProductName: new FormControl('', Validators.required),
      Category: new FormControl('', Validators.required),
      Price: new FormControl('', Validators.required),
      Availablity: new FormControl('', Validators.required),
      Description: new FormControl('', Validators.required)
    })
  }



  async getProductsData() {
    const res = await this.apiService.commonGetCall(`http://localhost:4199/Admin/GetProducts`);
    this.productsData = res.data;
  }

  async getProductsByID(id: any) {
    const res = await this.apiService.commonGetCall(`http://localhost:4199/Admin/GetProductsByID?ID=${id}`);
    const productData = res.data[0];
    this.productsForm = new FormGroup({
      ID: new FormControl(productData.id || ''),
      ProductName: new FormControl(productData.productName || '', Validators.required),
      Category: new FormControl(productData.category || '', Validators.required),
      Price: new FormControl(productData.price || '', Validators.required),
      Availablity: new FormControl(productData.availablity || '', Validators.required),
      Description: new FormControl(productData.description || '', Validators.required),
    })
  };

  async openModal(popup: any, id: any = "") {

    if (id) {
      this.getProductsByID(id);
    } else {
      this.clearForm();
    }
    this.modalService.open(popup, { centered: true, size: 'xl' });
  }

  onFileSelect(event: any) {
    const file = event.target.files?.[0];
    if (file) {
      this.imagePath = `uploads/${file.name}`
    }
  }
  async save() {
    const formData = { ...this.productsForm.value, Image: this.imagePath };
    if (formData.ID == '') {
      await this.apiService.commonPostCall(`http://localhost:4199/Admin/InsertProducts`, formData);
      Swal.fire('inserted')
    } else if (formData.ID != '') {
      await this.apiService.commonPostCall('http://localhost:4199/Admin/UpdateProducts', formData);
      Swal.fire('updated')
    } else {
      Swal.fire('error')
    };
    this.getProductsData();
    this.modalService.dismissAll();
  }

  async deleteProducts(id:any) {
    const res = await Swal.fire({
      title: 'Are you sure to delete',
      confirmButtonText: 'Yes',
      showCancelButton:true,
      cancelButtonText: 'No Cancel'
    });
    if (res.isConfirmed) {
      await this.apiService.commonGetCall(`http://localhost:4199/Admin/DeleteProducts?ID=${id}`);
      Swal.fire('Product Deleted');
    };
    await this.getProductsData();
  }
}

import { Component, OnInit } from '@angular/core';
import { Apiservice } from '../../../Service/apiservice';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-payment-history',
  standalone: false,
  templateUrl: './payment-history.html',
  styleUrl: './payment-history.scss'
})
export class PaymentHistory implements OnInit {
 
  featured = [
    // Mobiles
    { name: 'iPhone 15 Pro', price: '₹119,900', img: '../../../assets/images/15pro.jpg', category: 'mobile' },
    { name: 'Samsung Galaxy S24', price: '₹72,499', img: '../../../assets/images/galaxys24.jpg', category: 'mobile' },
    { name: 'OnePlus 12', price: '₹65,999', img: '../../../assets/images/oneplus12.jpg', category: 'mobile' },
    { name: 'Pixel 9', price: '₹55,999', img: '../../../assets/images/pixel9.jpg', category: 'mobile' },

    // Laptops
    { name: 'Dell XPS 13', price: '₹98,000', img: '../../../assets/images/dell15.jpg', category: 'laptop' },
    { name: 'MacBook Air M3', price: '₹1,20,000', img: '../../../assets/images/macbook.jpg', category: 'laptop' },
    { name: 'HP Spectre x360', price: '₹1,05,000', img: '../../../assets/images/hp.jpg', category: 'laptop' },
    { name: 'Lenovo ThinkPad X1', price: '₹95,000', img: '../../../assets/images/lenovo.jpg', category: 'laptop' },

    // TVs
    { name: 'Samsung QLED 55"', price: '₹1,05,000', img: '../../../assets/images/samsung.jpg', category: 'tv' },
    { name: 'LG OLED 65"', price: '₹1,50,000', img: '../../../assets/images/lg.jpg', category: 'tv' },
    { name: 'Sony Bravia 50"', price: '₹85,000', img: '../../../assets/images/sony.jpg', category: 'tv' },
    { name: 'TCL 55"', price: '₹60,000', img: '../../../assets/images/tcl.jpg', category: 'tv' }
  ];

  paymentsData: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.getPaymentsData();
  }

  getPaymentsData() {
    // Mock payment data for the single user using featured products
    this.paymentsData = [
      { id: 1, product: this.featured[0], date: '2025-10-01', status: 'Completed' },
      { id: 2, product: this.featured[4], date: '2025-10-02', status: 'Pending' },
      { id: 3, product: this.featured[8], date: '2025-10-03', status: 'Failed' },
      { id: 4, product: this.featured[1], date: '2025-10-03', status: 'Completed' },
      { id: 5, product: this.featured[5], date: '2025-10-04', status: 'Pending' }
    ];
  }

  viewPayment(ID: any) {
    const payment = this.paymentsData.find(p => p.id === ID);
    Swal.fire({
      title: 'Payment Details',
      html: `
        <p><b>Product:</b> ${payment.product.name}</p>
        <p><b>Amount:</b> ${payment.product.price}</p>
        <p><b>Category:</b> ${payment.product.category}</p>
        <p><b>Date:</b> ${payment.date}</p>
        <p><b>Status:</b> ${payment.status}</p>
      `,
      imageUrl: payment.product.img,
      imageWidth: 200,
      imageHeight: 150,
      imageAlt: payment.product.name,
      icon: 'info'
    });
  }
}

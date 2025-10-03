import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cart',
  standalone: false,
  templateUrl: './cart.html',
  styleUrl: './cart.scss'
})
export class Cart implements OnInit {
 featured = [
    { name: 'iPhone 15 Pro', price: 119900, img: '../../../assets/images/15pro.jpg', category: 'mobile' },
    { name: 'Samsung Galaxy S24', price: 72499, img: '../../../assets/images/galaxys24.jpg', category: 'mobile' },
    { name: 'OnePlus 12', price: 65999, img: '../../../assets/images/oneplus12.jpg', category: 'mobile' },
    { name: 'Pixel 9', price: 55999, img: '../../../assets/images/pixel9.jpg', category: 'mobile' },
    { name: 'Dell XPS 13', price: 98000, img: '../../../assets/images/dell15.jpg', category: 'laptop' },
    { name: 'MacBook Air M3', price: 120000, img: '../../../assets/images/macbook.jpg', category: 'laptop' },
    { name: 'HP Spectre x360', price: 105000, img: '../../../assets/images/hp.jpg', category: 'laptop' },
    { name: 'Lenovo ThinkPad X1', price: 95000, img: '../../../assets/images/lenovo.jpg', category: 'laptop' },
    { name: 'Samsung QLED 55"', price: 105000, img: '../../../assets/images/samsung.jpg', category: 'tv' },
    { name: 'LG OLED 65"', price: 150000, img: '../../../assets/images/lg.jpg', category: 'tv' },
    { name: 'Sony Bravia 50"', price: 85000, img: '../../../assets/images/sony.jpg', category: 'tv' },
    { name: 'TCL 55"', price: 60000, img: '../../../assets/images/tcl.jpg', category: 'tv' }
  ];

  cartData: any[] = [];
  totalPrice: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.getCartData();
    this.calculateTotal();
  }

  getCartData() {
    // Mock cart data
    this.cartData = [
      { id: 1, product: this.featured[0], quantity: 1, status: 'Purchased' },
      { id: 2, product: this.featured[1], quantity: 2, status: 'Pending' },
      { id: 3, product: this.featured[4], quantity: 1, status: 'Cancelled' }
    ];
  }

  increaseQuantity(item: any) {
    item.quantity += 1;
    this.calculateTotal();
  }

  decreaseQuantity(item: any) {
    if (item.quantity > 1) {
      item.quantity -= 1;
      this.calculateTotal();
    }
  }

  removeCartItem(ID: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: "This item will be removed from your cart.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, remove it!',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.isConfirmed) {
        this.cartData = this.cartData.filter(item => item.id !== ID);
        this.calculateTotal();
        Swal.fire('Removed!', 'Item has been removed from the cart.', 'success');
      }
    });
  }

  calculateTotal() {
    this.totalPrice = this.cartData.reduce((sum, item) => {
      return sum + (item.product.price * item.quantity);
    }, 0);
  }
}

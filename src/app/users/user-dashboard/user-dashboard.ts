import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-dashboard',
  standalone: false,
  templateUrl: './user-dashboard.html',
  styleUrl: './user-dashboard.scss'
})
export class UserDashboard implements OnInit {

  kpis = {
    activeBookings: 4,
    wishlist: 7,
    wallet: 1240
  };

  // Featured products with categories
  featured = [
    // Mobiles
    { name: 'iPhone 15 Pro', price: '₹119,900', img: '../../../assets/images/15pro.jpg', category: 'mobile' },
    { name: 'Samsung Galaxy S24', price: '₹72,499', img: '../../../assets/images/galaxys24.jpg', category: 'mobile' },
    { name: 'OnePlus 12', price: '₹65,999', img: '../../../assets/images/oneplus12.jpg', category: 'mobile' },
    { name: 'Pixel 9', price: '₹55,999', img: '../../../assets/images/pixel9.jpg', category: 'mobile' },

    // Laptops
    { name: 'Dell XPS 13', price: '₹98,000', img: 'assets/images/dell15.jpg', category: 'laptop' },
    { name: 'MacBook Air M3', price: '₹1,20,000', img: 'assets/images/macbook.jpg', category: 'laptop' },
    { name: 'HP Spectre x360', price: '₹1,05,000', img: 'assets/images/hp.jpg', category: 'laptop' },
    { name: 'Lenovo ThinkPad X1', price: '₹95,000', img: 'assets/images/lenovo.jpg', category: 'laptop' },

    // TVs
    { name: 'Samsung QLED 55"', price: '₹1,05,000', img: 'assets/images/samsung.jpg', category: 'tv' },
    { name: 'LG OLED 65"', price: '₹1,50,000', img: 'assets/images/lg.jpg', category: 'tv' },
    { name: 'Sony Bravia 50"', price: '₹85,000', img: 'assets/images/sony.jpg', category: 'tv' },
    { name: 'TCL 55"', price: '₹60,000', img: 'assets/images/tcl.jpg', category: 'tv' }
  ];

  // Recent orders (optional)
  recentOrders = [
    { id: '#1008', product: 'iPhone 15 Pro', date: '2025-09-30', status: 'Confirmed', amount: '₹119,900' },
    { id: '#1007', product: 'Dell XPS 13', date: '2025-09-29', status: 'Delivered', amount: '₹98,000' },
    { id: '#1006', product: 'Sony Bravia 50"', date: '2025-09-28', status: 'Pending', amount: '₹85,000' }
  ];

  constructor() { }

  ngOnInit(): void { }

  addToCart(item: any) {
    alert(`Added ${item.name} to cart (demo).`);
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders',
  standalone: false,
  templateUrl: './orders.html',
  styleUrl: './orders.scss'
})
export class Orders implements OnInit {

  orders: any[] = [
    { id: '#1008', product: 'iPhone 15 Pro', date: '2025-09-30', status: 'Confirmed', amount: '₹119,900' },
    { id: '#1007', product: 'Dell XPS 13', date: '2025-09-29', status: 'Delivered', amount: '₹98,000' },
    { id: '#1006', product: 'Sony Bravia 50\"', date: '2025-09-28', status: 'Pending', amount: '₹85,000' },
    { id: '#1005', product: 'Samsung Galaxy S24', date: '2025-09-25', status: 'Shipped', amount: '₹72,499' },
    { id: '#1004', product: 'LG OLED 65\"', date: '2025-09-20', status: 'Cancelled', amount: '₹1,50,000' }
  ];

  totalOrders = 0;
  deliveredCount = 0;
  shippedCount = 0;
  pendingCount = 0;

  constructor() { }

  ngOnInit(): void {
    this.calculateCounts();
  }
  calculateCounts() {
    this.totalOrders = this.orders.length;
    this.deliveredCount = this.orders.filter(o => o.status === 'Delivered').length;
    this.shippedCount = this.orders.filter(o => o.status === 'Shipped').length;
    this.pendingCount = this.orders.filter(o => o.status === 'Pending').length;
  }
}

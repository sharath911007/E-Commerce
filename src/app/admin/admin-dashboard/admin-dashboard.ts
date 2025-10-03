import { Component, OnInit } from '@angular/core';
import { Apiservice } from '../../../Service/apiservice';
import { Loaderservice } from '../../../Service/loaderservice';
import { Color, ScaleType } from '@swimlane/ngx-charts';
import { Chart, ChartType, registerables } from 'chart.js';
import * as shape from 'd3-shape'; 

@Component({
  selector: 'app-admin-dashboard',
  standalone: false,
  templateUrl: './admin-dashboard.html',
  styleUrl: './admin-dashboard.scss'
})
export class AdminDashboard implements OnInit {
  polarCanvas: any;

  constructor(public apiService: Apiservice, public loaderService: Loaderservice) { }

   // ====== Data holders ======
  userData: any[] = [];
  productsData: any[] = [];
  bookingsData: any[] = [];
  cancelledBookings: any[] = [];
  pendingBookings: any[] = [];
  confirmedBookings: any[] = [];

  // ====== Line Chart (Bookings) ======
  chartData: any[] = [];
  view: [number, number] = [600, 300];
  colorScheme: Color = {
    name: 'bookingsScheme',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#201a98']
  };
  // Smooth bezier curve
  curve: any = shape.curveBasis;

  // ====== Pie Chart (Products) ======
  productPieData: any[] = [];
  pieView: [number, number] = [500, 300];
  pieColorScheme: Color = {
    name: 'productsScheme',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#4f46e5', '#f59e0b', '#10b981', '#ef4444', '#8b5cf6']
  };

  ngOnInit(): void {
    this.getData();
    this.getBookingsData();
    this.getBookingChart();
  }

  private async getData() {
    const [usersRes, productsRes]: any = await Promise.all([
      this.apiService.commonGetCall('http://localhost:4199/Admin/GetUsers'),
      this.apiService.commonGetCall('http://localhost:4199/Admin/GetProducts')
    ]);

    this.userData = usersRes.data;
    this.productsData = productsRes.data;

    // transform products into {name, value} for pie chart
    const categoryMap: Record<string, number> = {};
    this.productsData.forEach((p: any) => {
      const cat = p.category || 'Uncategorized';
      categoryMap[cat] = (categoryMap[cat] || 0) + 1;
    });
    this.productPieData = Object.entries(categoryMap).map(([cat, count]) => ({
      name: cat,
      value: count
    }));
  }

  private async getBookingsData() {
    const res: any = await this.apiService.commonGetCall('http://localhost:4199/Admin/GetBookings');
    this.bookingsData = res.data;
    this.cancelledBookings = this.bookingsData.filter((b: any) => b.bStatus === 'Cancelled');
    this.pendingBookings   = this.bookingsData.filter((b: any) => b.bStatus === 'Pending');
    this.confirmedBookings = this.bookingsData.filter((b: any) => b.bStatus === 'Confirmed');
    console.log('c',this.bookingsData)
  }

  private async getBookingChart() {
    const res: any = await this.apiService.commonGetCall(
      'http://localhost:4199/Admin/GetBookingChart'
    );
    this.chartData = [
      {
        name: 'Bookings',
        series: res.data.map((item: any) => ({
          name: new Date(item.bookingDay).toLocaleDateString(),
          value: item.totalBookings
        }))
      }
    ];
  }


}


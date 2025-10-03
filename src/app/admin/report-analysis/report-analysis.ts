import { Component } from '@angular/core';
import { Color, ScaleType } from '@swimlane/ngx-charts';


@Component({
  selector: 'app-report-analysis',
  standalone: false,
  templateUrl: './report-analysis.html',
  styleUrl: './report-analysis.scss'
})
export class ReportAnalysis {
  totalUsers = 120;
  totalProducts = 45;
  totalBookings = 85;
  revenue = 15000;

  // Bookings trend (line chart)
  bookingsTrend: any[] = [
    {
      name: 'Bookings',
      series: [
        { name: 'Sep 25', value: 5 },
        { name: 'Sep 26', value: 7 },
        { name: 'Sep 27', value: 3 },
        { name: 'Sep 28', value: 9 },
        { name: 'Sep 29', value: 4 },
        { name: 'Sep 30', value: 6 }
      ]
    }
  ];

  // Top Products (bar chart)
  topProducts: any[] = [
    { name: 'iPhone 15', value: 20 },
    { name: 'Samsung Galaxy S24', value: 15 },
    { name: 'OnePlus 12', value: 10 },
    { name: 'Pixel 9', value: 8 }
  ];

  // User Registrations (pie chart)
  userRegistrations: any[] = [
    { name: 'Week 1', value: 15 },
    { name: 'Week 2', value: 20 },
    { name: 'Week 3', value: 25 },
    { name: 'Week 4', value: 18 }
  ];

  view: [number, number] = [350, 200]; // chart size
  colorScheme: Color = {
    name: 'customScheme',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#4f46e5', '#22c55e', '#f97316', '#ef4444']
  };
}

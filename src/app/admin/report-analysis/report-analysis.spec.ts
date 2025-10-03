import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportAnalysis } from './report-analysis';

describe('ReportAnalysis', () => {
  let component: ReportAnalysis;
  let fixture: ComponentFixture<ReportAnalysis>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportAnalysis]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportAnalysis);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

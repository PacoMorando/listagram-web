import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListsDashboardComponent } from './lists-dashboard.component';

describe('ListsDashboardComponent', () => {
  let component: ListsDashboardComponent;
  let fixture: ComponentFixture<ListsDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListsDashboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

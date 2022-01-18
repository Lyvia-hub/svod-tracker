import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardAddProgramComponent } from './dashboard-add-program.component';

describe('DashboardAddProgramComponent', () => {
  let component: DashboardAddProgramComponent;
  let fixture: ComponentFixture<DashboardAddProgramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardAddProgramComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardAddProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

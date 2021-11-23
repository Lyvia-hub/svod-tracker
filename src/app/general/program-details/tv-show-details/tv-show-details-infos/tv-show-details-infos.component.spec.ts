import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvShowDetailsInfosComponent } from './tv-show-details-infos.component';

describe('TvShowDetailsInfosComponent', () => {
  let component: TvShowDetailsInfosComponent;
  let fixture: ComponentFixture<TvShowDetailsInfosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TvShowDetailsInfosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TvShowDetailsInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

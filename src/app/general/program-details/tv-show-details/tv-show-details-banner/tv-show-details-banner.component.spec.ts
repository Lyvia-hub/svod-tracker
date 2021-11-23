import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvShowDetailsBannerComponent } from './tv-show-details-banner.component';

describe('TvShowDetailsBannerComponent', () => {
  let component: TvShowDetailsBannerComponent;
  let fixture: ComponentFixture<TvShowDetailsBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TvShowDetailsBannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TvShowDetailsBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

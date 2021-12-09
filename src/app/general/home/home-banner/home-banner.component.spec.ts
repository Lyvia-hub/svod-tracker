import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBannerComponent } from './home-banner.component';

describe('HomeBannerComponent', () => {
  let component: HomeBannerComponent;
  let fixture: ComponentFixture<HomeBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeBannerComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display a title and subtitle', () => {
    const text = fixture.debugElement.nativeElement;
    expect(text.querySelector('h2').textContent).toContain('Un outil pour gérer vos séries préférées en quelques clics');
    expect(text.querySelector('.banner-title').textContent).toContain('SVOD Tracker');
  });
});

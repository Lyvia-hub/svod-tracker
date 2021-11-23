import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvShowDetailsCastComponent } from './tv-show-details-cast.component';

describe('TvShowDetailsCastComponent', () => {
  let component: TvShowDetailsCastComponent;
  let fixture: ComponentFixture<TvShowDetailsCastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TvShowDetailsCastComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TvShowDetailsCastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

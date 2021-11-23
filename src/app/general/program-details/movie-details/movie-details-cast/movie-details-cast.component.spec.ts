import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDetailsCastComponent } from './movie-details-cast.component';

describe('MovieDetailsCastComponent', () => {
  let component: MovieDetailsCastComponent;
  let fixture: ComponentFixture<MovieDetailsCastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieDetailsCastComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieDetailsCastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDetailsInfosComponent } from './movie-details-infos.component';

describe('MovieDetailsInfosComponent', () => {
  let component: MovieDetailsInfosComponent;
  let fixture: ComponentFixture<MovieDetailsInfosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieDetailsInfosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieDetailsInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

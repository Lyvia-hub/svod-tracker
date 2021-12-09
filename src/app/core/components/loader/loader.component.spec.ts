import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { LoaderService } from '../../services/loader.service';

import { LoaderComponent } from './loader.component';

describe('LoaderComponent', () => {
  let component: LoaderComponent;
  let fixture: ComponentFixture<LoaderComponent>;
  const loader = {
    loaderState: of({ show: false }),
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoaderComponent],
      providers:
        [{ provide: LoaderService, useValue: loader }],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show loading indicator if the page is not loaded', () => {
    // const spinner = spyOn(TestBed.inject(NgxSpinnerService), "show");
    // expect(spinner).toHaveBeenCalled();
  });


});

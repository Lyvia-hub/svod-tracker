import { TestBed } from '@angular/core/testing';

import { ErrorService } from './error.service';
import { ToastrService } from './toastr.service';

describe('ErrorService', () => {
  let service: ErrorService;
  let error = {
    error: {
      error: { message: "error message details" }
    }
  };
  let toastrSpy: any;

  beforeEach(() => {
    toastrSpy = jasmine.createSpyObj('ToastrService', ['showToastr']);
    TestBed.configureTestingModule({
      providers: [
        ErrorService,
        { provide: ToastrService, useValue: toastrSpy }
      ]
    });
    service = TestBed.inject(ErrorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call toastrService', () => {

    pending();
  });

  it('should display an error', () => {
    /*const errorDisplayed = service.handleError(error);

    let errorMessage = {
      category: 'danger',
      message: error.error.error.message
    };
    expect(errorDisplayed).toThrowError("error details message");*/
    pending();
  });
});

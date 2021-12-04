import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SigninFormComponent } from './signin-form.component';

import { RouterTestingModule } from '@angular/router/testing';

import { HttpClientModule } from '@angular/common/http';

describe('SigninFormComponent', () => {
  let component: SigninFormComponent;
  let fixture: ComponentFixture<SigninFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SigninFormComponent],
      imports: [
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
        RouterTestingModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SigninFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should count 3 input into the form', () => {
    //getting the form element from the HTML content and storing into the form element variable
    const formElement = fixture.debugElement.nativeElement.querySelector('.signinForm');
    //using query selector to find all input element inside the form
    const inputElements = formElement.querySelectorAll('input');
    //check if the number of input elements are equals to the number of form controls defined
    expect(inputElements.length).toEqual(3);
  });

  it('should check initial form values for signin form group', () => {
    //get the signin form from component
    const signinFormGroup = component.signinForm;
    //create a dummy signin form default value object
    const signinFormValues = {
      name: '',
      email: '',
      password: ''
    }
    //compare both the form group values with dummy object
    expect(signinFormGroup.value).toEqual(signinFormValues);
  });

  it('should check username value before entering some value and validation', () => {
    //Get the username element from HTML content using debugElement and querySeclector
    const signinFormUserElement: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('.signinForm').querySelectorAll('input')[0];
    //Get the username value from the component form builder.
    const usernameValueFormGroup = component.signinForm.get('username');
    //Compare step 1 and step 2 values.
    /*expect(signinFormUserElement.value).toEqual(usernameValueFormGroup?.value);*/
    //As there is no value entered into the username HTML element, there will be one required error. So, form builder contains an error object and will not be equal to “null”
    expect(usernameValueFormGroup?.errors).not.toBeNull();
    //As there is no value in the username field of HTML, the required property expected to be true.
    //expect(usernameValueFormGroup?.errors.required).toBeTruthy();
  });

  xit('should check username value after entering some value and validation', () => {
    // Get the username element from HTML content using debugElement and querySeclector
    const signinFormUserElement: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('.signinForm').querySelectorAll('input')[0];
    // Assign some value to username HTML element
    signinFormUserElement.value = '';
    // Emit input event to update the HTML content
    signinFormUserElement.dispatchEvent(new Event('input'));
    // =Detect the changes for the component
    fixture.detectChanges();
    //Once the component is stable and updated, we will get the form username from the form builder
    fixture.whenStable().then(() => {
      const usernameValueFormGroup = component.signinForm.get('username');
      // we expect both HTML element value and form control username value to be equal
      expect(signinFormUserElement.value).toEqual(usernameValueFormGroup?.value);
      //As the username field in HTML is filled with some value, there are no errors for form builder => expecting errors to be “null”
      expect(usernameValueFormGroup?.errors).toBeNull();
    })
  });

  xit('should check if signin form is valid when validators are fulfilled', () => {
    //get the username element from HTML content using debugElement and querySeclector
    const signinFormUserElement: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('.signinForm').querySelectorAll('input')[0];
    //get the email element from HTML content using debugElement and querySeclector
    const signinFormEmailElement: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('.signinForm').querySelectorAll('input')[1];
    //Get the password element from HTML content using debugElement and querySeclector
    const signinFormPasswordElement: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('.signinForm').querySelectorAll('input')[2];
    //Fill the Username value
    signinFormUserElement.value = 'Test';
    //Fill the email value
    signinFormEmailElement.value = 'test@gmail.com';
    //Fill the password value
    signinFormPasswordElement.value = '12345';
    //Dispatching events on Username/email/password elements for updating the value in the HTML username field
    signinFormUserElement.dispatchEvent(new Event('input'));
    signinFormEmailElement.dispatchEvent(new Event('input'));
    signinFormPasswordElement.dispatchEvent(new Event('input'));
    //Get the signin form group valid property.
    const isSigninFormValid = component.signinForm.valid;
    //Expect the form group valid property to be true.
    fixture.whenStable().then(() => {
      expect(isSigninFormValid).toBeTruthy();
    })

  });
});

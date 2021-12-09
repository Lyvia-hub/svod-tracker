import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { PageNotFoundComponent } from './page-not-found.component';

describe('PageNotFoundComponent', () => {
  let component: PageNotFoundComponent;
  let fixture: ComponentFixture<PageNotFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PageNotFoundComponent],
      providers: [
        { provide: Location, useValue: window.location }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display error 404 and page not found', () => {
    const text = fixture.debugElement.nativeElement;
    expect(text.querySelector('h1').textContent).toContain('404');
    expect(text.querySelector('h2').textContent).toContain('Page not found');
  });

  it('should have back() method', () => {

    expect(component.back).toBeDefined();
  });

  it('should', fakeAsync(() => {
    spyOn(component, 'back');

    let button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();
    // simulates the passage of time until all pending asynchronous activities finish
    tick();
    expect(component.back).toHaveBeenCalled();
  }));

});

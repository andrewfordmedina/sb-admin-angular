import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTagifyComponent } from './form-tagify.component';

describe('FormTagifyComponent', () => {
  let component: FormTagifyComponent;
  let fixture: ComponentFixture<FormTagifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormTagifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormTagifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

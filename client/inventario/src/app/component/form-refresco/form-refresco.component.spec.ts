import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRefrescoComponent } from './form-refresco.component';

describe('FormRefrescoComponent', () => {
  let component: FormRefrescoComponent;
  let fixture: ComponentFixture<FormRefrescoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormRefrescoComponent]
    });
    fixture = TestBed.createComponent(FormRefrescoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

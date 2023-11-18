import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LintenRefrescoComponent } from './linten-refresco.component';

describe('LintenRefrescoComponent', () => {
  let component: LintenRefrescoComponent;
  let fixture: ComponentFixture<LintenRefrescoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LintenRefrescoComponent]
    });
    fixture = TestBed.createComponent(LintenRefrescoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

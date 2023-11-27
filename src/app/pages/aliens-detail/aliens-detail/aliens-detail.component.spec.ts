import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AliensDetailComponent } from './aliens-detail.component';

describe('AliensDetailComponent', () => {
  let component: AliensDetailComponent;
  let fixture: ComponentFixture<AliensDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AliensDetailComponent]
    });
    fixture = TestBed.createComponent(AliensDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

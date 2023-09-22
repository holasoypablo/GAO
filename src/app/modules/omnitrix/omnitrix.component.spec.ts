import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OmnitrixComponent } from './omnitrix.component';

describe('OmnitrixComponent', () => {
  let component: OmnitrixComponent;
  let fixture: ComponentFixture<OmnitrixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OmnitrixComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OmnitrixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

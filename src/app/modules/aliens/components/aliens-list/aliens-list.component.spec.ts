import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AliensListComponent } from './aliens-list.component';

describe('AliensListComponent', () => {
  let component: AliensListComponent;
  let fixture: ComponentFixture<AliensListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AliensListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AliensListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

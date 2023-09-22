import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlienCommentsComponent } from './alien-comments.component';

describe('AlienCommentsComponent', () => {
  let component: AlienCommentsComponent;
  let fixture: ComponentFixture<AlienCommentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlienCommentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlienCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

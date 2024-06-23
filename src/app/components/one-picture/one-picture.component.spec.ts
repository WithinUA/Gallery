import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnePictureComponent } from './one-picture.component';

describe('OnePictureComponent', () => {
  let component: OnePictureComponent;
  let fixture: ComponentFixture<OnePictureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnePictureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnePictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

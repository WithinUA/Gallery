import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorPicturesComponent } from './author-pictures.component';

describe('AuthorPicturesComponent', () => {
  let component: AuthorPicturesComponent;
  let fixture: ComponentFixture<AuthorPicturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthorPicturesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthorPicturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

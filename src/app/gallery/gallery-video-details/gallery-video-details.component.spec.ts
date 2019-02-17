import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryVideoDetailsComponent } from './gallery-video-details.component';

describe('GalleryVideoDetailsComponent', () => {
  let component: GalleryVideoDetailsComponent;
  let fixture: ComponentFixture<GalleryVideoDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryVideoDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryVideoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

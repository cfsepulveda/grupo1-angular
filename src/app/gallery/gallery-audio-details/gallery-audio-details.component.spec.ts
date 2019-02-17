import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryAudioDetailsComponent } from './gallery-audio-details.component';

describe('GalleryAudioDetailsComponent', () => {
  let component: GalleryAudioDetailsComponent;
  let fixture: ComponentFixture<GalleryAudioDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryAudioDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryAudioDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

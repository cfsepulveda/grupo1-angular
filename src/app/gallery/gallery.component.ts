import { Component, OnInit } from '@angular/core';
import { GalleryRestClientService } from '../services/gallery-rest-client.service';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  constructor(private galleryRestClientService: GalleryRestClientService, public storageService: StorageService) { }

  audiosGallery: any[];
  videosGallery: any[];
  imagesGallery: any[];
  TestList=[{"type":"naturaleza"},{"type":"objetos"},{"type":"carros"}];
  TestList2=[{"type":"imagen"},{"type":"audio"},{"type":"video"}];
  selected="";
  onChange(newValue) {
    console.log(newValue);
    this.selected = newValue;
  
  }

  ngOnInit() {
    this.galleryRestClientService.getAllVideosGallery().subscribe(data => {
      this.storageService.videosGallery = data;
    })

    this.galleryRestClientService.getAllAudiosGallery().subscribe(data => {
      this.storageService.audiosGallery = data;
    })

    this.galleryRestClientService.getAllImagesGallery().subscribe(data => {
      this.storageService.imagesGallery = data;
    })
  }

}

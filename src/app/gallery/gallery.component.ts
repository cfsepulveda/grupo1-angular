import { Component, OnInit } from '@angular/core';
import { GalleryRestClientService } from '../services/gallery-rest-client.service';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  constructor(private galleryRestClientService: GalleryRestClientService, private storageService: StorageService) { }

  audiosGallery: any[];
  videosGallery: any[];
  imagesGallery: any[];


  ngOnInit() {
    this.galleryRestClientService.getAllVideosGallery().subscribe(data => {
      console.log(data);
      this.storageService.videosGallery = data;
    })

    this.galleryRestClientService.getAllAudiosGallery().subscribe(data => {
      console.log(data);
      this.storageService.audiosGallery = data;
    })

    this.galleryRestClientService.getAllImagesGallery().subscribe(data => {
      console.log(data);
      this.storageService.imagesGallery = data;
    })
  }

}

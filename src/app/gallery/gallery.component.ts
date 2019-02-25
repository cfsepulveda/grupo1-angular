import { Component, OnInit } from '@angular/core';
import { GalleryRestClientService } from '../services/gallery-rest-client.service';
import { CategoryRestClientService } from '../services/category-rest-client.service';
import { StorageService } from '../services/storage.service';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})


export class GalleryComponent implements OnInit {

  constructor(private galleryRestClientService: GalleryRestClientService,private categoryRestClientService:CategoryRestClientService, public storageService: StorageService) { }

  audiosGallery: any[];
  videosGallery: any[];
  imagesGallery: any[];
  TestList: any;
  TestList2: any;
  selected="";
  selected2="";
  onChange(newValue) {
    console.log(newValue);
    this.selected = newValue;
  
  }
  onChange2(newValue) {
    console.log(newValue);
    this.selected2 = newValue;
  
  }
  ngOnInit() {
    this.categoryRestClientService.getMediaTypes().subscribe(data => {
      this.TestList2=data;
    });
    this.categoryRestClientService.getCategoriesTypes().subscribe(data =>{
      this.TestList=data;
    })
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

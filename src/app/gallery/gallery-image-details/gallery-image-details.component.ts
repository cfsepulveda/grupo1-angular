import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-gallery-image-details',
  templateUrl: './gallery-image-details.component.html',
  styleUrls: ['./gallery-image-details.component.scss']
})
export class GalleryImageDetailsComponent implements OnInit {

  private id: string;
  private image: any;
  private clips: any[];
  private clipForm: FormGroup;



  constructor(private storageService: StorageService, private route: ActivatedRoute) {
    this.getImageDetails();
  }

  ngOnInit() {
  }


  public getImageDetails(): void {
    this.id = this.route.snapshot.params['id'];
    this.image = this.storageService.imagesGallery[this.id]
  }



}

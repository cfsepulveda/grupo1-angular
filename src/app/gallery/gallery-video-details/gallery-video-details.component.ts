import { Component, OnInit } from '@angular/core';
import { DetailsRestClient } from 'src/app/services/details-rest-client.service';
import { ActivatedRoute } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-gallery-video-details',
  templateUrl: './gallery-video-details.component.html',
  styleUrls: ['./gallery-video-details.component.scss']
})
export class GalleryVideoDetailsComponent implements OnInit {

  private id: string;
  private video: any;
  private clips: any[];
  private clipForm: FormGroup;



  constructor(private storageService: StorageService, private route: ActivatedRoute, private detailsRestClient: DetailsRestClient, private formBuilder: FormBuilder,
  ) {
    this.getVideoDetails();
    this.getVideosClips();
  }

  ngOnInit() {
    this.buildForm();
  }

  public buildForm() {
    this.clipForm = this.formBuilder.group({
      name: new FormControl('', Validators.required),
      secondStart: new FormControl('', Validators.required),
      secondEnd: new FormControl('', Validators.required),
    });
  }

  public getVideoDetails(): void {
    this.id = this.route.snapshot.params['id'];
    this.video = this.storageService.videosGallery[this.id]
  }

  public getVideosClips(): void {
    this.detailsRestClient.getAllVideosClip().subscribe(data => {
      this.clips = data.filter((item, index) => item.videoName == this.video.name);
    })
  }

  public submit(): void {
    const name = this.clipForm.get('name').value;
    const secondStart = this.clipForm.get('secondStart').value;
    const secondEnd = this.clipForm.get('secondEnd').value;
    const clip = { "name": name, "secondStart": secondStart, "secondEnd": secondEnd, "videoName": this.video.name };
    this.detailsRestClient.createVideoClip(clip).subscribe(response => {
      this.getVideosClips();
    })

  }


}

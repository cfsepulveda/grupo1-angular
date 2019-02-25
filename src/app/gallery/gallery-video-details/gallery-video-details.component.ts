import { Component, OnInit } from '@angular/core';
import { DetailsRestClient } from 'src/app/services/details-rest-client.service';
import { ActivatedRoute } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Location } from '@angular/common';


@Component({
  selector: 'app-gallery-video-details',
  templateUrl: './gallery-video-details.component.html',
  styleUrls: ['./gallery-video-details.component.scss']
})
export class GalleryVideoDetailsComponent implements OnInit {

  id: string;
  video: any;
  clipForm: FormGroup;
  clips: any[];
  secondStart: number;
  secondEnd: number;




  constructor(public storageService: StorageService,
    private route: ActivatedRoute,
    private detailsRestClient: DetailsRestClient,
    private formBuilder: FormBuilder,
    private location: Location,
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
      this.clips = data.filter((item, index) => item.videoname == this.video.name);
    })
  }

  public submit(): void {
    const name = this.clipForm.get('name').value;
    const secondStart = this.clipForm.get('secondStart').value;
    const secondEnd = this.clipForm.get('secondEnd').value;
    const clip = { "name": name, "secondstart": secondStart, "secondend": secondEnd, "videoname": this.video.name, 'email': this.storageService.userLogged.email };
    this.detailsRestClient.createVideoClip(clip).subscribe(response => {
      this.getVideosClips();
      this.clipForm.reset();
    })

  }

  public watchClip(i): void {
    this.secondStart = Number(this.clips[i].secondstart);
    this.secondEnd = Number(this.clips[i].secondend);
    this.video.url + "#t=" + this.secondStart + "," + this.secondEnd;
    document.getElementById("video").setAttribute("src", this.video.url + "#t=" + this.secondStart + "," + this.secondEnd);
    document.getElementById("video").setAttribute("autoplay", "autoplay");
  }


  goBack(): void {
    this.location.back();
  }

}

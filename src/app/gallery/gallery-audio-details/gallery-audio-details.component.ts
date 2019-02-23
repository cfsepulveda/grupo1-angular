import { Component, OnInit } from '@angular/core';
import { DetailsRestClient } from 'src/app/services/details-rest-client.service';
import { ActivatedRoute } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Location } from '@angular/common';


@Component({
  selector: 'app-gallery-audio-details',
  templateUrl: './gallery-audio-details.component.html',
  styleUrls: ['./gallery-audio-details.component.scss']
})
export class GalleryAudioDetailsComponent implements OnInit {

  id: string;
  audio: any;
  clips: any[];
  clipForm: FormGroup;
  secondStart: number;
  secondEnd: number;


  constructor(public storageService: StorageService, 
    private route: ActivatedRoute, 
    private detailsRestClient: DetailsRestClient,
     private formBuilder: FormBuilder,
     private location: Location
  ) {
    this.getAudioDetails();
    this.getAudiosClips();
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

  public getAudioDetails(): void {
    this.id = this.route.snapshot.params['id'];
    this.audio = this.storageService.audiosGallery[this.id]
  }

  public getAudiosClips(): void {
    this.detailsRestClient.getAllAudiosClip().subscribe(data => {
      this.clips = data.filter((item, index) => item.audioname == this.audio.name);
    })
  }

  public submit(): void {
    const name = this.clipForm.get('name').value;
    const secondStart = this.clipForm.get('secondStart').value;
    const secondEnd = this.clipForm.get('secondEnd').value;
    const clip = { "name": name, "secondstart": secondStart, "secondend": secondEnd, "audioname": this.audio.name, 'email': this.storageService.userLogged.email  };
    this.detailsRestClient.createAudioClip(clip).subscribe(response => {
      this.getAudiosClips();
      this.clipForm.reset();
    })
  }

  public watchClip(i): void {
    this.secondStart = Number(this.clips[i].secondstart);
    this.secondEnd = Number(this.clips[i].secondend);
    this.audio.url + "#t=" + this.secondStart + "," + this.secondEnd;
    document.getElementById("audio").setAttribute("src", this.audio.url + "#t=" + this.secondStart + "," + this.secondEnd);
    document.getElementById("audio").setAttribute("autoplay", "autoplay");
  }

  goBack(): void {
    this.location.back();
  }

}

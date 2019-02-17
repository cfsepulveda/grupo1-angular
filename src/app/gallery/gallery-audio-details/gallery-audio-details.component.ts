import { Component, OnInit } from '@angular/core';
import { DetailsRestClient } from 'src/app/services/details-rest-client.service';
import { ActivatedRoute } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

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



  constructor(public storageService: StorageService, private route: ActivatedRoute, private detailsRestClient: DetailsRestClient, private formBuilder: FormBuilder,
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
      this.clips = data.filter((item, index) => item.audioName == this.audio.name);
    })
  }

  public submit(): void {
    const name = this.clipForm.get('name').value;
    const secondStart = this.clipForm.get('secondStart').value;
    const secondEnd = this.clipForm.get('secondEnd').value;
    const clip = { "name": name, "secondStart": secondStart, "secondEnd": secondEnd, "audioName": this.audio.name };
    this.detailsRestClient.createAudioClip(clip).subscribe(response => {
      this.getAudiosClips();
    })

  }


}

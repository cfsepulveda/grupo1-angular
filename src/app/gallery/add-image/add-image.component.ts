import { Component, OnInit } from '@angular/core';
import { DetailsRestClient } from 'src/app/services/details-rest-client.service';
import { ActivatedRoute } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
@Component({
  selector: 'app-add-image',
  templateUrl: './add-image.component.html',
  styleUrls: ['./add-image.component.scss']
})
export class AddImageComponent implements OnInit {

  id: string;
  users: any;
  image: any;
  imageForm: FormGroup;



  constructor(public storageService: StorageService, private route: ActivatedRoute, private detailsRestClient: DetailsRestClient, private formBuilder: FormBuilder,
  ) {
    this.getUsers();
  }

  ngOnInit() {
    this.buildForm();
  }

  public buildForm() {
    this.imageForm = this.formBuilder.group({
      Nombre: new FormControl('', Validators.required),
      Url: new FormControl('', Validators.required)
    });
  
  }

  public getUsers(): void {
    this.detailsRestClient.getUsers().subscribe(data => {
      this.users=data});
    alert(this.users);
  }
  public submit(): void {
    const Nombre = this.imageForm.get('Nombre').value;
    const Url = this.imageForm.get('Url').value;
  
    const imagen = { "name": Nombre, "secondStart": Url};

    alert(JSON.stringify(imagen));
    /*
    this.detailsRestClient.createVideoClip(clip).subscribe(response => {
      this.getVideosClips();
    })*/

  }
}

import { Component, OnInit} from '@angular/core';
import { ImageRestClient } from 'src/app/services/image-rest-client.service';
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
  Url: String;
  selectFile:File;
  onFileSelected(event) {
    console.log(event);
    this.selectFile = event.target.files[0]; 
  }


  constructor(public storageService: StorageService, private route: ActivatedRoute, private imageRestClient: ImageRestClient, private formBuilder: FormBuilder,
  ) {
   
  }

  ngOnInit() {
    this.buildForm();
  }

  public buildForm() {
    this.imageForm = this.formBuilder.group({
      Nombre: new FormControl('', Validators.required),
     
      Titulo: new FormControl('', Validators.required),
      Ciudad: new FormControl('', Validators.required),
      Pais: new FormControl('', Validators.required),
      Descripcion : new FormControl('', Validators.required),
      Tipo : new FormControl('', Validators.required),
      
    });
  
  }

  public submit(): void {
    const Nombre = this.imageForm.get('Nombre').value;
    const Url = this.Url;
    const Titulo = this.imageForm.get('Titulo').value;
    const date = new Date();
    const Ciudad = this.imageForm.get('Ciudad').value;
    const Pais = this.imageForm.get('Pais').value;
    const Descripcion = this.imageForm.get('Descripcion').value;
    const Tipo = this.imageForm.get('Tipo').value;
    const Archivo = this.selectFile;
    const imagen = { "name": Nombre,"author":Nombre,"url": Url ,"title":Titulo ,"date":date,"city":Ciudad,"country":Pais,"Descripcion":Descripcion,"type":Tipo,"Archivo":Archivo,"User":1};
    
    this.imageRestClient.createImage(imagen).subscribe(response => {
      alert("Imagen agregada");
    })

  }
}

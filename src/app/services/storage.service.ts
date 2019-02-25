import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {

  public imagesGallery: any[];
  public videosGallery: any[];
  public audiosGallery: any[];
  public isLogged: boolean;
  public userLogged: any;

  constructor() { }
}

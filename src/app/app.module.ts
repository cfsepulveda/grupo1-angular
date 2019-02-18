import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery/gallery.component';
import { GalleryRestClientService } from './services/gallery-rest-client.service';
import { HttpModule } from '@angular/http';
import { GalleryAudioDetailsComponent } from './gallery/gallery-audio-details/gallery-audio-details.component';
import { GalleryImageDetailsComponent } from './gallery/gallery-image-details/gallery-image-details.component';
import { GalleryVideoDetailsComponent } from './gallery/gallery-video-details/gallery-video-details.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DetailsRestClient } from './services/details-rest-client.service';
import { StorageService } from './services/storage.service';
import { ReactiveFormsModule } from '@angular/forms';
import { AddImageComponent } from './gallery/add-image/add-image.component';
import { FormsModule } from '@angular/forms';
import { RegisterUsersComponent } from './register-users/register-users.component';
import { RegisterUsersRestClientService } from './services/register-users-rest-client.service';
import { ImageRestClient } from './services/image-rest-client.service';

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    GalleryAudioDetailsComponent,
    GalleryImageDetailsComponent,
    GalleryVideoDetailsComponent,
    NavbarComponent,
    AddImageComponent,
    RegisterUsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [GalleryRestClientService, DetailsRestClient, StorageService, RegisterUsersRestClientService,ImageRestClient],
  bootstrap: [AppComponent]
})
export class AppModule { }

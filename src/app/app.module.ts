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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterUsersComponent } from './register-users/register-users.component';
import { RegisterUsersRestClientService } from './services/register-users-rest-client.service';

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    GalleryAudioDetailsComponent,
    GalleryImageDetailsComponent,
    GalleryVideoDetailsComponent,
    NavbarComponent,
    RegisterUsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [GalleryRestClientService, DetailsRestClient, StorageService, RegisterUsersRestClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }

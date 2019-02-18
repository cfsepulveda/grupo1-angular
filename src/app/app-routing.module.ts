import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalleryAudioDetailsComponent } from './gallery/gallery-audio-details/gallery-audio-details.component';
import { GalleryImageDetailsComponent } from './gallery/gallery-image-details/gallery-image-details.component';
import { GalleryVideoDetailsComponent } from './gallery/gallery-video-details/gallery-video-details.component';
import { AddImageComponent } from './gallery/add-image/add-image.component';
import { GalleryComponent } from './gallery/gallery.component';
import { RegisterUsersComponent } from './register-users/register-users.component';

const routes: Routes = [
	{
		path: 'gallery',
		component: GalleryComponent
	},
	{
		path: 'gallery/audio-details/:id',
		component: GalleryAudioDetailsComponent
	},
	{
		path: 'gallery/image-details/:id',
		component: GalleryImageDetailsComponent
	},
	{
		path: 'gallery/video-details/:id',
		component: GalleryVideoDetailsComponent
	},{
		path: 'gallery/addimage',
		component: AddImageComponent
	},
	{
		path: 'registerUser',
		component: RegisterUsersComponent
	}
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}

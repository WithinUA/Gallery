import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { OnePictureComponent } from './components/one-picture/one-picture.component';
import { PictureServiceService } from './components/picture-service.service';
import { AuthorPicturesComponent } from './components/author-pictures/author-pictures.component';

@NgModule({
  declarations: [
    AppComponent,
    OnePictureComponent,
    AuthorPicturesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [PictureServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

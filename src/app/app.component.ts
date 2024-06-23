import { Component, OnInit } from '@angular/core';
import { IOnePicture } from './components/one-picture/onePicture';
import { PictureServiceService } from './components/picture-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private pictureService: PictureServiceService) { }
  ngOnInit(): void { }
  public isSelectedPicture() {
    return this.pictureService.selectedPicture;
  }
}

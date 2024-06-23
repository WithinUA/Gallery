import { Component, OnInit } from '@angular/core';
import { PictureServiceService } from '../picture-service.service';
import { IOnePicture } from '../one-picture/onePicture';

@Component({
  selector: 'app-author-pictures',
  templateUrl: './author-pictures.component.html',
  styleUrls: ['./author-pictures.component.scss']
})
export class AuthorPicturesComponent implements OnInit {
  public authorPictures: IOnePicture[] = [];

  constructor(private pictureService: PictureServiceService){}
  ngOnInit(): void {}

  public getSelectedPicture(){
    this.authorPictures = this.pictureService.authorPictures;
    return this.pictureService.selectedPicture;
  }
  public setSelectedPicture(selectedPicture: IOnePicture){
    this.pictureService.selectedPicture = selectedPicture;
  }
}

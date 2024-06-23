import { Component, OnInit } from '@angular/core';
import { IOnePicture } from './onePicture';
import { PictureServiceService } from '../picture-service.service';

@Component({
  selector: 'app-one-picture',
  templateUrl: './one-picture.component.html',
  styleUrls: ['./one-picture.component.scss']
})
export class OnePictureComponent implements OnInit{
  public pictures: IOnePicture[] = [];
  constructor(private pictureService: PictureServiceService){
  }
  ngOnInit(): void {
    this.pictures = this.pictureService.getData();
  }
  public setSelectedPicture(selectedPicture: IOnePicture){
    this.pictureService.selectedPicture = selectedPicture;
    this.pictureService.updateAuthorPictures();
  }
}

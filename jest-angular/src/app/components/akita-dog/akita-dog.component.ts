import { Component, OnInit } from '@angular/core';
import { DogService } from '../../services/dog.service';

@Component({
  selector: 'app-akita-dog',
  templateUrl: './akita-dog.component.html',
  styleUrls: ['./akita-dog.component.scss'],
})
export class AkitaDogComponent implements OnInit {
  breedImages: Object;

  constructor(private service: DogService) {}

  ngOnInit() {
    this.getDoggo('akita');
  }

  getDoggo(dog) {
    this.service.getDogByBreed(dog).subscribe((el) => {
      // returns all images of akita breed
      this.breedImages = el['message'];
    });
  }
}

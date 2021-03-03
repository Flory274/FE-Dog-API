import { Component, OnInit } from '@angular/core';
import { DogService } from '../../services/dog.service';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  dogs: Object;
  breeds: Array<object>;
  dogBreed: String = '';
  breedImages: Object;
  randomPicture: any;
  switchToRandom: Boolean = false;

  constructor(private service: DogService, private form: FormBuilder) {}

  ngOnInit() {
    this.getAllDogs();
  }

  getAllDogs() {
    this.service.getDogs().subscribe((allDogs) => {
      // returns a list of all dog breeds
      this.dogs = allDogs['message'];
    });
  }

  getDoggo(dog) {
    this.service.getDogByBreed(dog).subscribe((el) => {
      // returns all images of said breed
      this.breedImages = el['message'];
      this.switchToRandom = false;
    });
  }

  getDogInput(e: any) {
    this.dogBreed = e;
    this.getDoggo(this.dogBreed);
  }

  getRandom() {
    this.switchToRandom = true;
    this.service.getRandom().subscribe((item) => {
      this.randomPicture = item['message'];
    });
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DogService {
  constructor(private http: HttpClient) {}

  // APIdoc: https://dog.ceo/dog-api/documentation/
  getDogs() {
    let url = 'https://dog.ceo/api/breeds/list/all';
    const dogs = this.http.get(url);
    return dogs;
  }

  getDogByBreed(dog: String) {
    return this.http.get('https://dog.ceo/api/breed/' + dog + '/images');
  }

  getRandom() {
    return this.http.get('https://dog.ceo/api/breeds/image/random');
  }
}

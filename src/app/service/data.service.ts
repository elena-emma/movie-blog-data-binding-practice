import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
movieSelected = new EventEmitter<any>();
http = inject(HttpClient);

url = 'https://api.rawg.io/api/games?key=546121027b7a48cea28c2f563bffa660'

getMovies(){
  return this.http.get(this.url);
}


}



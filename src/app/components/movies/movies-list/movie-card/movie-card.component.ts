import { Component, OnInit, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../../../service/data.service';
import { MoviesComponent } from '../../movies.component';
import { RouterLink } from '@angular/router';
import { MovieDetailsComponent } from '../../movie-details/movie-details.component';
import { MoviesListComponent } from '../movies-list.component';

@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [CommonModule, RouterLink, MovieDetailsComponent],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.css',
})
export class MovieCardComponent implements OnInit {
 
@Input() movie: any;

service=inject(DataService)

ngOnInit() {

}
onSelected(){
this.service.movieSelected.emit(this.movie)
}
 onPreview() {
  this.service.moviePreviewed.emit(this.movie)
 }

}



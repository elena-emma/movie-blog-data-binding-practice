import { Component, OnInit, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../service/data.service';
import { MovieCardComponent } from './movies-list/movie-card/movie-card.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { SideMenuComponent } from './movies-list/side-menu/side-menu.component';
import { ShopingCartComponent } from './shoping-cart/shoping-cart.component';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [
    CommonModule,
    MovieCardComponent,
    MoviesListComponent,
    MovieDetailsComponent,
    SideMenuComponent,
    ShopingCartComponent
  ],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css',
  providers: [DataService],
})
export class MoviesComponent implements OnInit {
  service = inject(DataService);
  movies: any;
  selectedMovie: any;

  constructor() {
    this.service.movieSelected.subscribe({
      next: (res: any) => (this.selectedMovie = res),
    });
  }

  ngOnInit() {
    return this.service.getMovies().subscribe({
      next: (res: any) => (this.movies = res),
    });
  }
}

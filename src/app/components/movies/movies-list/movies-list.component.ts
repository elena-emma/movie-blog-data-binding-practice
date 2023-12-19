import { Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from '../movies.component';
import { DataService } from '../../../service/data.service';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { SideMenuComponent } from './side-menu/side-menu.component';

@Component({
  selector: 'app-movies-list',
  standalone: true,
  imports: [CommonModule, MovieCardComponent, SideMenuComponent],
  templateUrl: './movies-list.component.html',
  styleUrl: './movies-list.component.css',
})
export class MoviesListComponent implements OnInit{
// service=inject(DataService)
@Input()movies: any;

ngOnInit() {
  // this.movies=this.service.getMovies();
}

}

import { Component, Input, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../../service/data.service';


@Component({
  selector: 'app-shoping-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shoping-cart.component.html',
  styleUrl: './shoping-cart.component.css'
})
export class ShopingCartComponent implements OnInit {
@Input() movie: any;
movies: any[]=[];
  service=inject(DataService)
  constructor(){

  };
  ngOnInit() {
    this.movies = [this.movie];
    this.service.movieSelected
      .subscribe(
        (movie) => {
          this.movies.push(movie);
        }
      );

      }
    }
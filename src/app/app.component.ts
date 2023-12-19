import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './components/movies/movies.component';
import { FooterComponent } from './components/core/footer/footer.component';
import { HeaderComponent } from './components/core/header/header.component';
import { MovieDetailsComponent } from './components/movies/movie-details/movie-details.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule } from '@angular/forms';
import { SideMenuComponent } from './components/movies/movies-list/side-menu/side-menu.component';
import { ShopingCartComponent } from './components/movies/shoping-cart/shoping-cart.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    MoviesComponent,
    HomeComponent, 
    FooterComponent,
    HeaderComponent,
    MovieDetailsComponent,
    FormsModule,
    SideMenuComponent,
    ShopingCartComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MovieLand';
}

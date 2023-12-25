import { Component, Input, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../../service/data.service';

@Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css'
})
export class MovieDetailsComponent implements OnInit {
  @Input() movie: any;
  service=inject(DataService);
  constructor() {};

  ngOnInit() {};
 
}


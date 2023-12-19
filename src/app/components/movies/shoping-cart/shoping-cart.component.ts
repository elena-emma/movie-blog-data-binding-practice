import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../../service/data.service';


@Component({
  selector: 'app-shoping-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shoping-cart.component.html',
  styleUrl: './shoping-cart.component.css'
})
export class ShopingCartComponent {

  @Input() movie : any;
  constructor(){

  };
  

}

import { CommonModule } from '@angular/common';
import { Component,Input} from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule,RouterLink],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {

  // myStar = faStar;
  constructor(private router : Router){}

  starRating: number = 4; // Set the star rating for the product
  starsArray: number[] = Array.from({ length: 5 }, (_, index) => index + 1);

  getStarIcon(index: number): IconProp {
    const roundedRating = Math.round(this.starRating * 2) / 2;
    return index + 1 <= roundedRating ? solidStar : regularStar;
  }


  @Input() singleProduct : any;

  navigateToProductDetail(id : number){
    this.router.navigate(['/productDetail', id]);
  }
}

import {Component, Inject, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductService} from "../services/product-service.service";
import {Products} from "../modals/product.modals";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit{
  productService=Inject(ProductService)

  ngOnInit(): void {
    this.productService.getProducts('http://localhost:3000/clothes',{page:0,perPage:5}).subscribe((products:Products)=>{
      console.log(products)
    })
  }


}

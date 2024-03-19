import {Inject, Injectable} from '@angular/core';
import {ApiService} from "./api-service.service";
import {Options} from "../modals/options.modal";
import {PaginationParams, Product} from "../modals/product.modals";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiService=Inject(ApiService)

  constructor() { }
  getProducts(url:string,params:PaginationParams):Observable<Product>{
    return this.apiService.getProduct(url, {params,responseType:'json'})
  }
}

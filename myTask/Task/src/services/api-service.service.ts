import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Options} from "../modals/options.modal";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
 httpClient=Inject(HttpClient)

  constructor() { }
  getData<T>(url:string,options?:Options):Observable<T>{
  return  this.httpClient.get<T>(url,options) as Observable<T>

  }
}

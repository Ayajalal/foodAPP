import { Injectable } from '@angular/core';
import { map } from "rxjs/operators";
import { URLSearchParams, Jsonp } from "@angular/http";


@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private jsonp:Jsonp) { }
  search(term:string){
    let search=new URLSearchParams();
    search.set('action','opensearch');search.set('search',term);
    search.set('format','json');
    return this.jsonp.get("https://en.wikipedia.org/w/api.php?callback=JSONP_CALLBACK",{search}).pipe(map((response:any)=>response.json()[1]))
  }
}

import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http'
import 'rxjs/add/operator/map';

@Injectable()
export class SearchService {

  constructor(
    private http:Http,
  ) { }

  sendRequese(data1,data2){
  let headers = new Headers();
  headers.append('Content-Type','application/json');
  return this.http.get('https://api.github.com/search/repositories?q='+data1+'+language:'+data2).map(response => response.json())

  }

}



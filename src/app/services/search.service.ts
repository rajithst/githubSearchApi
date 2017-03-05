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

  getRepo(id:string){

    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.get('https://api.github.com/repositories/'+id).map(res=>res.json());
  }

  getLangs(name:String){

    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.get('https://api.github.com/repos/'+ name+'/languages').map(res=>res.json());

  }

  getContributors(name:String){

    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.get('https://api.github.com/repos/'+ name+'/contributors').map(res=>res.json());

  }

  getDownloads(name:String){

    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.get('https://api.github.com/repos/'+ name+'/downloads').map(res=>res.json());

  }

  getDeployments(name:String){

    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.get('https://api.github.com/repos/'+ name+'/deployments').map(res=>res.json());

  }

  getEvents(name:String){

    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.get('https://api.github.com/repos/'+ name+'/events').map(res=>res.json());

  }

  searchCode(data1,data2){

    let headers = new Headers();
    headers.append('Content-Type','application/json');
    headers.append('Content-Type','application/vnd.github.v3.text-match+json');
    return this.http.get('https://api.github.com/search/code?q='+data1+'+repo:'+data2).map(res=>res.json());
  }

}



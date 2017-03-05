import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../services/search.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  data:Object;
  selection:String;
  searchkey:String;

  constructor(
    private searchService:SearchService,
    private route:Router


  ) { }

  ngOnInit() {

  }

  searchResult(){

   const data = {
      lang:this.selection,
      repo:this.searchkey
    };

   this.searchService.sendRequese(this.searchkey,this.selection).subscribe(response=>{
      this.data = response.items;
      console.log(this.data)
    })



  }



}

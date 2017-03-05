import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { SearchService } from '../../services/search.service';


@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})



export class RepositoryComponent implements OnInit {
  private fork = require('./assets/logo.png');
  private eye = require('./assets/eye.png');
  private network = require('./assets/members.png');

  repos:Object;
  langs:Object;
  conts:Object;
  deploy:Object;
  downloads:Object;
  events:Object;
  name:string;

  constructor(
    private route:Router,
    private searchService:SearchService,
    private activatedRoute:ActivatedRoute

  ) { }

  ngOnInit() {

    this.activatedRoute.params.map(params=>params['id']).subscribe((id)=> {
      this.searchService.getRepo(id).subscribe(repos => {
        this.repos = repos;
        //console.log(this.repos)
      })
    })

    this.activatedRoute.params.map(params=>params['id']).subscribe((id)=> {
      this.searchService.getRepo(id).subscribe(repos => {
        this.repos = repos;
        console.log(this.repos)
      })
    })

  }

  loadMore(name){
      this.searchService.getLangs(name).subscribe(repos => {
        this.langs = repos;
        //console.log(this.langs)
    })

    this.searchService.getContributors(name).subscribe(repos => {
      this.conts = repos;
      //console.log(this.conts)
    })

    this.searchService.getDeployments(name).subscribe(repos => {
      this.deploy = repos;
      //console.log(this.deploy)
    })


    this.searchService.getDownloads(name).subscribe(repos => {
      this.downloads = repos;
      //console.log(this.downloads)
    })


    this.searchService.getEvents(name).subscribe(repos => {
      this.events = repos;
      //console.log(this.events)
    })



  }

}




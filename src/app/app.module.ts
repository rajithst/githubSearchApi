import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule,Routes } from '@angular/router';
import { KeysPipe }  from './components/repository/custom.pipe';

import { SearchService } from './services/search.service';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchComponent } from './components/search/search.component';
import { RepositoryComponent } from './components/repository/repository.component';
import { AboutComponent } from './components/about/about.component';


const appRoute:Routes = [

  {path:'',component:SearchComponent},
  {path:'repository/:id',component:RepositoryComponent},
  {path:'about',component:AboutComponent},

]

@NgModule({
  declarations: [
    AppComponent,
    KeysPipe,
    NavbarComponent,
    SearchComponent,
    RepositoryComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }

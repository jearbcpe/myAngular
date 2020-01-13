import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainMenuComponent } from './component/main-menu/main-menu.component';
import { HomeComponent } from './component/home/home.component';
import { UserComponent } from './component/user/user.component';

import { Routes,RouterModule } from '@angular/router';


const appRoutes: Routes = [
  { path: '' , component : HomeComponent},
  { path: 'home' , component : HomeComponent},
  { path: 'user' , component : UserComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    HomeComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

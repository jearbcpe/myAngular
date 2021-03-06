import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule ,  FormsModule  } from '@angular/forms'; //for NgForm

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainMenuComponent } from './component/main-menu/main-menu.component';
import { HomeComponent } from './component/home/home.component';
import { UserComponent } from './component/user/user.component';

import { Routes,RouterModule } from '@angular/router';
import { TbUserComponent } from './component/tb-user/tb-user.component';
import { UserDetailComponent } from './component/user-detail/user-detail.component';
import { SaveUserComponent } from './component/save-user/save-user.component';
import { VerifyComponent } from './component/verify/verify.component';


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
    UserComponent,
    TbUserComponent,
    UserDetailComponent,
    SaveUserComponent,
    VerifyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

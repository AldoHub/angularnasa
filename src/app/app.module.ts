import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {HttpClientModule, HttpHeaders} from "@angular/common/http";
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { LightboxModule } from 'angular2-lightbox';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    LazyLoadImageModule,
    LightboxModule,
  ],
  providers: [LightboxModule],
  bootstrap: [AppComponent]
})
export class AppModule {}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CategoryComponent } from './components/category/category.component';
import { CartComponent } from './components/cart/cart.component';

import { LocalStorageService } from './services/localstorage.service';
import { ApiService } from './services/api.service';
import { FacebookModule } from 'ngx-facebook';
@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    FacebookModule.forRoot()
  ],
  providers: [
    LocalStorageService,
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

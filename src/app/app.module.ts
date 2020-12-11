import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { adminLteConf } from './admin-lte.conf';

import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';

import { LayoutModule } from 'angular-admin-lte';

import { AppComponent } from './app.component';

import { LoadingPageModule, MaterialBarModule } from 'angular-loading-page';
import { ProductComponent } from './product/product.component';
import { ClientLayoutComponent } from './layout/client-layout/client-layout.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { BookComponent } from './screens/book/book.component';
import { CategoryComponent } from './screens/category/category.component';
import { GenreComponent } from './screens/genre/genre.component';
import { HomeComponent } from './screens/home/home.component';
import { MenuComponent } from './menu/menu.component';
import { LogoutComponent } from './screens/logout/logout.component';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import {  RouterModule } from '@angular/router';
import {JwtInterceptor} from './_helpers/jwt.interceptor';
import { from } from 'rxjs';
import { LoginComponent } from './screens/login/login.component';
import { AddCategoryComponent } from './screens/add-category/add-category.component';
import { AddGenreComponent } from './screens/add-genre/add-genre.component';


@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    LayoutModule.forRoot(adminLteConf),
    LoadingPageModule, MaterialBarModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule
  ],
  declarations: [
    AppComponent,
    ProductComponent,
    ClientLayoutComponent,
    AdminLayoutComponent,
    BookComponent,
    CategoryComponent,
    GenreComponent,
    HomeComponent,
    MenuComponent,
    LoginComponent,
    LogoutComponent,
    AddCategoryComponent,
    AddGenreComponent
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi:true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

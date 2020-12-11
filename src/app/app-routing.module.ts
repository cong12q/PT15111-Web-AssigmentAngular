import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';

import { ClientLayoutComponent } from './layout/client-layout/client-layout.component';
import { ProductComponent } from './product/product.component';
import { BookComponent } from './screens/book/book.component';
import { CateListComponent } from './screens/cate-list/cate-list.component';
import { CategoryComponent } from './screens/category/category.component';
import { GenreComponent } from './screens/genre/genre.component';
import { HomeComponent } from './screens/home/home.component';
import { AuthGuard } from './_helpers/auth.guard';
import { from } from 'rxjs';
import { ProductDetailComponent } from './screens/product-detail/product-detail.component';
import { LoginComponent } from './screens/login/login.component';
import { AddCategoryComponent } from './screens/add-category/add-category.component';
import { AddGenreComponent } from './screens/add-genre/add-genre.component';
import { LogoutComponent } from './screens/logout/logout.component';

const routes: Routes = [
  {
    path: '', component: ClientLayoutComponent, 
  children:[
    {
      path: '', component: HomeComponent
    },
    {
      path: 'danh-muc/:id', component: CategoryComponent
    },
    {
      path: 'chi-tiet-sach/:id', component: BookComponent
    },
    {
      path: 'the-loai/:id',component: GenreComponent
    }
  ]
},
  {
     path: 'admin', component: AdminLayoutComponent, canActivate: [AuthGuard],
children:[
  {
    path: '',component: ProductComponent
  },
  {
    path: 'them-moi-danh-muc', component: AddCategoryComponent
  },
  {
    path: 'them-moi-the-loai', component: AddGenreComponent
  },
  {
    path: 'logout',component: LogoutComponent
  }
]
  },
{
  path: 'login', component: LoginComponent
},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

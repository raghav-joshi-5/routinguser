import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { UserComponent } from './component/user/user.component';
import { ProductComponent } from './component/product/product.component';
import { PagenotfoundComponent } from './component/pagenotfound/pagenotfound.component';
import { UserDetailsComponent } from './component/user-details/user-details.component';
import { UserFormComponent } from './component/user-form/user-form.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home Dashboard',
  },
  {
    path: 'home',
    component: HomeComponent,
    title: 'Home Dashboard',
  },
  {
    path: 'user',
    component: UserComponent,
    title: 'User Dashboard',
  },
  {
    path: 'user/adduser',
    component: UserFormComponent,
    title: 'User Form',
  },
  {
    path: 'user/:userID',
    component: UserDetailsComponent,
    title: 'User Details',
  },
  {
    path: 'user/:userID/edituser',
    component: UserFormComponent,
    title: 'User Form',
  },

  {
    path: 'product',
    component: ProductComponent,
    title: 'Product Dashboard',
  },
  {
    path: 'product/addproduct',
    component: ProductFormComponent,
    title: 'Product Dashboard',
  },
  {
    path: 'product/:PId',
    component: ProductDetailsComponent,
    title: 'Product Dashboard',
  },
  {
    path: 'product/:PId/editproduct',
    component: ProductFormComponent,
    title: 'Product Dashboard',
  },
  {
    path: '**',
    component: PagenotfoundComponent,
    title: '404 not Found',
  },
  {
    path: 'pagenotfound',
    component: PagenotfoundComponent,
    title: '404 not Found',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

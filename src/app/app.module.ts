import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './component/navbar/navbar.component';
import { HomeComponent } from './component/home/home.component';
import { MaterialModule } from './material/material.module';
import { UserComponent } from './component/user/user.component';
import { ProductComponent } from './component/product/product.component';
import { PagenotfoundComponent } from './component/pagenotfound/pagenotfound.component';
import { UserDetailsComponent } from './component/user-details/user-details.component';
import { UserFormComponent } from './component/user-form/user-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RemoveComponent } from './component/remove/remove.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    UserComponent,
    ProductComponent,
    PagenotfoundComponent,
    UserDetailsComponent,
    UserFormComponent,
    RemoveComponent,
    ProductFormComponent,
    ProductDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

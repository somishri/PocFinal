import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { ProductComponent } from './product/product.component';
import { AddProductComponent } from './product/addproduct/addproduct.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CategoryComponent } from './Product/category/category.component';
import { UpdateComponent } from './Product/update/update.component';
import { HomeComponent } from './home/home.component';
import { CategoryService } from './Shared/category.service';
import { CustomerService } from './Shared/customer.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminComponent } from './user/admin/admin.component';
import { from } from 'rxjs';
import { ProductService } from './Shared/product.service';
import { CartComponent } from './cart/cart.component';
import { DescriptionComponent } from './description/description.component';
import { ProductFilterPipe } from './product/product.filter.pipe';
import { OrderPlaceComponent } from './order-place/order-place.component';
import { ToastrModule } from 'ngx-toastr';
import { PaymentComponent } from './payment/payment.component'
import { NotificationService } from './Shared/notification.service';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { EditprofileComponent } from './user/editprofile/editprofile.component';


@NgModule({
  declarations:
    [
      AppComponent,
      UserComponent,
      RegistrationComponent,
      ProductComponent,
      AddProductComponent,
      CategoryComponent,
      UpdateComponent,
      HomeComponent,
      AdminComponent,
      CartComponent,
      DescriptionComponent,
      ProductFilterPipe,
      OrderPlaceComponent,
      PaymentComponent,
      FooterComponent,
      HeaderComponent,
      EditprofileComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 2000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),
  ],
  providers: [CategoryService, CustomerService, NotificationService],
  bootstrap: [AppComponent]
})
export class AppModule { }

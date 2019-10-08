import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { ProductComponent } from './product/product.component';
import { AddProductComponent } from './product/addproduct/addproduct.component';
import { UpdateComponent } from './Product/update/update.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './user/admin/admin.component';
import { CartComponent } from './cart/cart.component';
import { DescriptionComponent } from './description/description.component';
import { OrderPlaceComponent } from './order-place/order-place.component';
import { PaymentComponent } from './payment/payment.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { EditprofileComponent } from './user/editprofile/editprofile.component';



const routes: Routes = [
  
  // {path:'',redirectTo:'/user/registration',pathMatch:'full'},
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'user',component:UserComponent},
  {path:'registration',component:RegistrationComponent},
  {path:'admin',component:AdminComponent},
  {path:'editprofile',component:EditprofileComponent},
  {path:'cart',component:CartComponent},
  {path:'description/:id',component:DescriptionComponent},
  {path:'orderplace',component:OrderPlaceComponent},
  {path:'product',component:ProductComponent},
  {path:'update/:id',component: UpdateComponent},
  {path:'add-product',component: AddProductComponent}, 
  {path:'payment',component:PaymentComponent},
{path:'footer',component:FooterComponent},
{path:'header',component:HeaderComponent}
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

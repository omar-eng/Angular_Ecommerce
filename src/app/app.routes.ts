import { Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CartComponent } from './cart/cart.component';
import { NotfoundComponent } from './notfound/notfound.component';
import{ProductDetailsComponent} from './product-details/product-details.component';

export const routes: Routes = [

    {
        path: "",
        component: ProductsComponent,
        title: "Products"
    },
    {
        path: "Login",
        component: LoginComponent,
        title: "LogIn"
    },
    {
        path: "Register",
        component: RegisterComponent,
        title: "Register"
    },
    {
        path: "cart",
        component: CartComponent,
        title: "MyCart"
    },
    {
        path:"product-details/:id",
        component:ProductDetailsComponent,
        title:"Product Details"
    },
    {
        path: "**",
        component:NotfoundComponent,
        title: "Not Found"
    }
];

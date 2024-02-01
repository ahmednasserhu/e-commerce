import { Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

export const routes: Routes = [
    {
        path:"",
        component: ProductListComponent,
        title: "Home Page"
    },
    {
        path:"login",
        component: LoginComponent,
        title: "Login Page"
    },
    {
        path: "register",
        component: RegisterComponent,
        title: "Register Page"
    },
    {
        path: "productDetail/:id",
        component: ProductDetailsComponent,
        title: "Product Detail"
    },
    {
        path: "cart",
        component: ShoppingCartComponent,
        title: "Shopping Cart"
    },
    {
        path: '**',
        component: NotFoundComponent,
        title: "Not Found"
    }
];

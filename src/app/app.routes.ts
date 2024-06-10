import { Routes } from '@angular/router';
import { ListComponent } from './page/admin/product/list/list.component';
import { AddComponent } from './page/admin/product/add/add.component';
import { UpdateComponent } from './page/admin/product/update/update.component';
import { RegisterComponent } from './page/admin/user/register/register.component';
import { LoginComponent } from './page/admin/user/login/login.component';

export const routes: Routes = [
    {
        path: "product/list",
        component: ListComponent
    },
    {
        path: "product/add",
        component: AddComponent
    },
    {
        path: "product/edit/:id",
        component: UpdateComponent
    },
    {
        path: "register",
        component: RegisterComponent
    },
    {
        path: "login",
        component: LoginComponent
    },

];

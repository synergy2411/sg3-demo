import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { UserComponent } from './user/user.component';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';
import { ObsDemoComponent } from './obs-demo/obs-demo.component';
import { LoginGaurdService } from './services/login-gaurd.service';
import { ProductComponent } from './product/product.component';
import { OverviewComponent } from './product/overview/overview.component';
import { SpecificationComponent } from './product/specification/specification.component';
import { EmployeeComponent } from './employee/employee/employee.component';

export const APP_ROUTES: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    }, {
        path: 'login',
        component: LoginComponent
    }, {
        path: 'register',
        component: RegisterComponent
    }, {
        path: 'user',
        component: UserComponent,
        canActivate: [LoginGaurdService]
    }, {
        path: 'pipe',
        component: PipeDemoComponent
    }, {
        path: 'obs',
        component: ObsDemoComponent
    }, {
        path: 'product/:id/:name',
        component: ProductComponent,
        children: [
            {
                path: 'overview',
                component: OverviewComponent
            }, {
                path: 'spec',
                component: SpecificationComponent
            }
        ]
    },{
        path : 'employee',
        component : EmployeeComponent
    }, {
        path: '**',
        redirectTo: 'login',
        pathMatch: 'full'
    }
]
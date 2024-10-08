import { Routes } from '@angular/router';
import { AdminLayoutComponent } from './theme/admin-layout/admin-layout.component';
import { SisDashboardComponent } from './pages/sistema/sis-dashboard/sis-dashboard.component';
import { SisLoginComponent } from './pages/sistema/sis-login/sis-login.component';
import { authGuard } from './core/guards/auth.guard';
import { SisProximamenteComponent } from './pages/sistema/sis-proximamente/sis-proximamente.component';
import { SisRegisterComponent } from './pages/sistema/sis-register/sis-register.component';
import { GoogleOauthPageComponent } from './pages/sistema/google-oauth-page/google-oauth-page.component';

export const routes: Routes = [

    {
        path:'',
        component:AdminLayoutComponent,
        canActivate:[authGuard],
        canActivateChild: [authGuard],
        children:[
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path:'dashboard', component:SisDashboardComponent },
            { path:'administracion', loadChildren:()=> import ('./pages/administracion/administracion.routes').then(x => x.administracionRoutes) },
            { path:'proximamente', component:SisProximamenteComponent },
           
        ]

    },
    {
        path:'login',
        component:SisLoginComponent,
        //canActivate:[authGuard],
    },
    {
        path:'register',
        component:SisRegisterComponent,
        //canActivate:[authGuard],
    },
    {
        path:'OAuth/aluve/google',
        component:GoogleOauthPageComponent,
    },
    {
        path:'**',
        redirectTo:'dashboard'
    }
];

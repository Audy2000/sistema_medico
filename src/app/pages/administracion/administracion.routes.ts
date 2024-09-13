import { Routes } from "@angular/router";

export const administracionRoutes: Routes = [

    {
        path :'valida-usuario-medico',
        loadChildren: ()=> import ('./validacion-usuario-medico/validacion-usuario-medico.routes').then(x=> x.administracionRoutes)
    }
]
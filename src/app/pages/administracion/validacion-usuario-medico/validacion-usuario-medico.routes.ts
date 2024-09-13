import { Routes } from "@angular/router";
import { ListarValidacionUsuarioMedicoComponent } from "./listar-validacion-usuario-medico/listar-validacion-usuario-medico.component";
import { EditarValidacionUsuarioMedicoComponent } from "./editar-validacion-usuario-medico/editar-validacion-usuario-medico.component";

export const administracionRoutes: Routes = [

    {
        path :'',
        component : ListarValidacionUsuarioMedicoComponent
    },
    {
        path:'editar-validacion-usuario-medico',
        component: EditarValidacionUsuarioMedicoComponent
    }
]
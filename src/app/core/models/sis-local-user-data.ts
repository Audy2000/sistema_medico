export interface SisLocalUserData {
    token:string;
    token_type:string;
    time_start:Date;
    expires_in:number; // segundos
    username:string;
    periodo:string;
    roles : SisRol[] ;
}

export interface SisRefreshToken{
    token:string;
    expires_in:number;
    token_type:string;
}


export interface SisPermiso{
    nombre_permiso:string;
    descripcion_permiso:string;
}

export interface SisRol {
    rol:string;
    permisos : SisPermiso[];
}

export interface SisErrorLogin
{
    message:string;
}
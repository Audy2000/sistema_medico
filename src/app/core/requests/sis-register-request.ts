export interface SisRegisterRequest {
    cedula : string;
    fecha_nacimiento : Date | undefined;
    nombres : string;
    apellidos : string;
    email : string;
    password : string;
    confirm_password : string;
}

export const environment = {
    production: true,
    BASE_URL : 'http://localhost:3000/api/',
    user_data_key:'login_data',
    remember_session_key:'remember',
    NOMBRE_SISTEMA :'SISTEMA MÉDICO',

    // Estas variable se van a guardar en el sesion storage
    // segun se inicie o se registre un usuario con Oauth
    isLogin : 'is_login',
    isRegister:'is_register',
    google_data : 'google_data'
};

export const resources = {
    _login_label: { es: 'Inicia sesión', en: 'Log in' },
    _user_label: { es: 'Usuario', en: 'Username' },
    _password_label: { es: 'Contraseña', en: 'Password' },
    _validate_login_label: { es: 'Usuario o Contraseña invalida', en: 'Invalid username or password' },
    _home_label: { es: 'INICIO', en: 'HOME' },
    _logout_label: { es: 'Cerrar sesión', en: 'Log out'},
    T_label: { es: 'T', en: 'T' },
    Title_label: { es: 'enpo Challenge', en: 'enpo Challenge' }
}

export function retuResource(resource: any) {
    switch (window.navigator.language) {
        case 'es':
            return resource.es;
        case 'en':
            return resource.en;
        default:
            return resource.es;
    }
}
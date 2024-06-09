# Secure Forms App

Esta es una aplicación web básica que incluye un formulario de login y un formulario de cambio de contraseña. La aplicación está diseñada para ser ejecutada localmente sin necesidad de un servidor.

## Estructura del proyecto

secure-forms-app/
├── index.html
├── login.html
├── change-password.html
├── js/
│ └── scripts.js
└── README.md


## Archivos y su propósito

- **index.html**: Página principal de la aplicación.
- **login.html**: Contiene el formulario de login.
- **change-password.html**: Contiene el formulario de cambio de contraseña.
- **js/scripts.js**: Contiene las validaciones en JavaScript para ambos formularios.

## Solución a la vulnerabilidad

La validación de usuario y contraseña se está realizando en el cliente, lo cual es inseguro porque cualquiera puede ver el código JavaScript y obtener las credenciales. Para solucionar esto, deberíamos realizar la validación en el servidor, donde la lógica y las credenciales están protegidas. En una implementación real, las credenciales se enviarían a un servidor seguro utilizando HTTPS y la validación se realizaría en el backend.


# Node Rest CRUD
Sobre Nodejs + Express montaremos un formulario HTML que lanzará hacia la URL por AJAX datos tipo JSON que serán recogidos por Express mediante los diferentes verbos HTTP en las URL especificas.

### Detalles
Utilizaremos Nodejs como estructura basica, Express como framework de servidor, HTML para la interface de usuario, y JQuery para las operaciones AJAX y la manipulacion de datos del lado cliente.

## Pasos del CRUD

> initial commit

  1. El montaje basico consiste en distribuir las carpetas: en este projecto contaremos con una carpeta src para contener todos los archivos estaticos.
  2. En la raiz del projecto hemos creado el "entry point" de Nodejs y lo llamamos __index.js__, en el comenzaremos a requerir o cargar los modulos tanto nativos de Nodejs como externos que utilizaremos para actuar del lado del servidor.
  3. Utilizaremos Express para servir el root "/" con la ayuda del modulo Path nativo.

//Crear las rutas necesarias para que todas las páginas del proyecto funcionen. Las rutas deberán utilizar controladores.
// Crear los controladores que se encarguen de la lógica de cada página. Los controladores deberán renderizar vistas.
// Crear las vistas necesarias utilizando EJS.
// Tener en cuenta que los hipervínculos ya no redirigirán a un archivo .html, sino a una ruta como las mencionadas en primer punto. Lo mismo aplica a los formularios.

let controladores={
    index: function(req,res) {
        return res.render (' index', {contenido: ' index'})
    },
}
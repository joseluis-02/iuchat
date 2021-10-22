console.log("Inicio");
var Usuarios;
var Publicaciones;
var ID;
$(function () {
    Usuarios = [];
    Activo();
    Publicaciones = [];
    listar_usuarios();
    listar_publicacion()
});
function Activo() {
    $.getJSON('/config/User_active', function (data) {
        ID = data;
        console.log(ID);
    });
}
function listar_usuarios() {
    $.getJSON('/inicio/Listar', function (lista) {
        Usuarios = lista;
        $("#usuarios").html("");
        for (var i = 0; i < lista.length; i++) {
            var obj = lista[i];
            if (obj.id_user != ID) {
                var html = `
                 <div class="justify-content-between mb-2 pb-2 border-bottom">
                            <div class="d-flex align-items-center hover-pointer">
                                <img style="width:80px;" class="img-xs rounded-circle" src="${obj.foto}" alt="">
                                <p class="m-2 ">${obj.nombres}</p>
                                <button class="btn btn-info"><i class="fas fa-user-plus"></i></button>
                            </div>
                        </div>
             `;
                $("#usuarios").append(html);
            }
        }
    });
}
function listar_publicacion() {
    $.getJSON('/inicio/Publicaciones', function (lista) {
        Publicaciones = lista;
        $("#publicaciones").html("");
        for (var i = 0; i < lista.length; i++) {
            var obj = lista[i];
            var html = `
                 <div class="card gedf-card mb-3">
                    <div class="card-header">
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="mr-2">
                                    <img class="rounded-circle" width="45" src="${persona(obj.user_publicacion).foto}" alt="">
                                </div>
                                <div class="ml-2">
                                    <div class="h5 m-0">${persona(obj.user_publicacion).nombres}</div>
                                    <div class="h7 text-muted">${persona(obj.user_publicacion).usuario}</div>
                                </div>
                            </div>
                            <div>
                                <div class="dropdown">
                                    <button class="btn btn-light dropdown-toggle" type="button" id="gedf-drop1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i class="fa fa-ellipsis-h"></i>
                                    </button>
                                    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="gedf-drop1">
                                        <div class="h6 dropdown-header">Configuration</div>
                                        <a class="dropdown-item" href="#">Guardar</a>
                                        <a class="dropdown-item" href="#">Denuciar</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="card-body">
                        <div class="text-muted h7 mb-2"> <i class="fa fa-clock-o"></i>Publicado el:  ${obj.fecha + ' ' + obj.hora}</div>
                        <a class="card-link" href="#">
                            <h5 class="card-title">${obj.titulo}</h5>
                        </a>

                        <p class="card-text">
                            ${obj.contenido}
                        </p>
                        <img style="width:200px;" src"${obj.foto}"/>
                    </div>
                    <div class="card-footer">
                        <a href="#" class="card-link"><i class="fa fa-gittip"></i> Me gusta</a>
                        <a href="#" class="card-link"><i class="fa fa-comment"></i> Comentar</a>
                        <a href="#" class="card-link"><i class="fa fa-mail-forward"></i> Compartir</a>
                    </div>
                </div>
             `;
            $("#publicaciones").append(html);
        }
    });
}
function persona(id) {
    var obj = Usuarios.find(x => x.id_user == id);
    return obj;
}

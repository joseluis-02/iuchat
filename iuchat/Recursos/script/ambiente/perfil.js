console.log("Mis actividades");
var _publicaciones;
var Usuario;
var Amigos;
var friends;
var ID;
var IDP;
var url = null;

$(function () {
    Amigos = [];
    friends = [];
    _publicaciones = [];
    Activo();
    cuenta();
    listaAmigos();
    $('#customFile').change(function (e) {
        var reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = function () {
            imagenPrevia(reader.result);
        };
    });
});
function cuenta() {
    $.getJSON('/inicio/Listar', function (lista) {
        // USERS.push(lista.find(o => o.id_user == ID));
        Usuario = lista.find(o => o.id_user == ID);
        $.getJSON('/inicio/Publicaciones', function (lista) {
            _publicaciones = lista;
            $("#mispublicaciones").html("");
            for (var i = 0; i < lista.length; i++) {
                var obj = lista[i];
                if (ID == obj.user_publicacion) {
                    var html = `
  <div class="card gedf-card mb-2">
                    <div class="card-header">
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="mr-2">
                                    <img class="rounded-circle" width="45" src="${Usuario.foto}" alt="">
                                </div>
                                <div class="ml-2">
                                    <div class="h5 m-0">${Usuario.nombres}</div>
                                    <div class="h7 text-muted">${Usuario.usuario}</div>
                                </div>
                            </div>
                            <div>
                                <div class="dropdown">
                                    <button class="btn btn-light dropdown-toggle" type="button" id="gedf-drop1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i class="fa fa-ellipsis-h"></i>
                                    </button>
                                    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="gedf-drop1">
                                        <div class="h6 dropdown-header">Configuration</div>
                                        <a class="dropdown-item" href="#">Editar</a>
                                        <a class="dropdown-item" href="#">Ocultar</a>
                                        <a class="dropdown-item" onclick="eliminar(${obj.id_publicacion})" href="#">Borrar</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="card-body">
                        <div class="text-muted h7 mb-2"> <i class="fa fa-clock-o"></i>Publicado el  ${obj.fecha + ' ' + obj.hora } </div>
                        <a class="card-link" href="#">
                            <h5 class="card-title">${obj.titulo}</h5>
                        </a>

                        <p class="card-text">${obj.contenido}</p>
                       
                    </div>
                    <div class="card-footer">
                        <a href="#" class="card-link"><i class="fa fa-gittip"></i> Me gusta</a>
                        <a href="#" class="card-link"><i class="fa fa-comment"></i> Comentar</a>
                        <a href="#" class="card-link"><i class="fa fa-mail-forward"></i> Compartir</a>
                    </div>
                </div>
`;
                    $("#mispublicaciones").append(html);
                }
            }
        });
    });
}

function Activo() {
    $.getJSON('/config/User_active', function (id) {
        ID = id;
    });
}
function listaAmigos() {
    $.getJSON('/contacto/listFriends', function (lista) {
        $("#misamigos").html("");
        friends = lista;
        for (var i = 0; i < lista.length; i++) {
            var obj = lista[i];
            console.log(obj.id_user_secundario);
            if (obj.id_user_primario == ID) {
                $.getJSON('/inicio/Listar', function (lista) {
                    var a = lista.find(x => x.id_user == obj.id_user_secundario);
                    console.log(a);
                    var html = `
                 <div class="justify-content-between mb-2 pb-2 border-bottom">
                            <div class="d-flex align-items-center hover-pointer">
                                <img style="width:80px;" class="img-xs rounded-circle" src="${a.foto}" alt="">
                                <p class="m-2 ">${a.nombres}</p>
                                <button class="btn btn-info"><i class="fas fa-trash"></i></button>
                            </div>
                        </div>
             `;
                    $("#misamigos").append(html);
                });
            }
        }
    });
}
function publicar() {
    var u;
    $.getJSON('/inicio/Listar', function (lista) {
        // USERS.push(lista.find(o => o.id_user == ID));
        u = lista.find(o => o.id_user == ID);
        var obj = {
            user_publicacion: ID,
            titulo: "Publicado por" + u.nombres +" " +u.apellidos,
            contenido: $("#message").val(),
            foto: $("#customFile").val(),
        }
        $.post('/contacto/Guardar', obj, function (resp) {
            if (resp) {
                cuenta();
                console.log(resp);
            }
        });
    });
}
function imagenPrevia(img) {
    $("#preview").html('');
    let image = document.createElement('img');
    image.style.width = "200px";
    image.style.height = "auto";
    image.src = img;
    url = img;
    $("#preview").append(image);
    return image;
}
function eliminar(id) {
    var bool = confirm("Seguro de borrar la publicacion?");
    var obj = _publicaciones.find(x => x.id_publicacion == id);
    console.log(obj);
    if (bool) {
        $.post("/contacto/Borrar", obj, function (resp) {
            if (resp == "Eliminado") {
                alert("se elimino correctamente");
                cuenta();
            }
        });

    } else {
        alert("cancelo la solicitud");
    }

}
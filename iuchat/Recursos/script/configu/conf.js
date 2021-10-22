console.log("hola mundo");
var Usuarios;
var Usuario_activo;
var avata;
$(function () {
    Usuarios = [];
    Informacion();
    Activo();
    $('#rfoto').change(function (e) {
        var reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = function () {
            imagenPrevia(reader.result);
        };
    });
});
function imagenPrevia(img) {
    $("#preview").html('');
    let image = document.createElement('img');
    image.style.width = "150px";
    image.style.height = "auto";
    image.src = img;
    avata = img;
    $("#preview").html(image);
    return image;
}
function Informacion() {
    $.getJSON('/inicio/Listar', function (lista) {
        Usuarios = lista;
        console.log(Usuarios);
    });
}
function guardarCambios(){
    var obj = {
        id_user: Usuario_activo,
        nombres: $("#rnombres").val(),
        apellidos: $("#rapellidos").val(),
        usuario: $("#rusuario").val(),
        celular: $("#rcelular").val(),
        clave: $("#rclave").val(),
        foto: $("#ava").val()
    }
    $.post('/inicio/Guardar', obj, function (resp) {
        if (resp) {
            $("#editarperfil").modal('hide');
            Informacion();
            console.log(resp);
        }
        
    });
}
function Activo() {
    $.getJSON('/config/User_active', function (data) {
        Usuario_activo = data;
        var obj = buscar_user(Usuario_activo);
        console.log(obj.foto);
        $("#inombres").html(obj.nombres);
        $("#iapellidos").html(obj.apellidos);
        $("#iusuario").html(obj.usuario);
        $("#icelular").html(obj.celular);
        $("#iclave").html(obj.clave);
        $("#ifoto").attr("src",obj.foto);
    });
}
function iditar() {
    $("#rnombres").val(buscar_user(Usuario_activo).nombres);
    $("#rapellidos").val(buscar_user(Usuario_activo).apellidos);
    $("#rusuario").val(buscar_user(Usuario_activo).usuario);
    $("#rcelular").val(buscar_user(Usuario_activo).celular);
    $("#rclave").val(buscar_user(Usuario_activo).clave);
    $("#rfoto").val(imagenPrevia(buscar_user(Usuario_activo).foto));
}
function buscar_user(id) {
    var obj = Usuarios.find(x => x.id_user == id);
    return obj;
}
var avatar = "https://img2.freepng.es/20180722/gfc/kisspng-user-profile-2018-in-sight-user-conference-expo-5b554c0968c377.0307553315323166814291.jpg";
$(function () {
    login();
    limpiar();
});
function login() {
    $("#reg").hide();
    $("#b1").hide();
    $("#log").show();
    $("#b0").show();
}
function register() {
    $("#reg").show();
    $("#b1").show();
    $("#log").hide();
    $("#b0").hide();
}
function limpiar() {
    $("#id").val(-1);
    $("#log")[0].reset();
    $("#reg")[0].reset();
}
function guardar() {
    var obj = {
        id_user: $("#id").val(),
        nombres: $("#nombre").val(),
        apellidos: $("#apellido").val(),
        usuario: $("#usuario").val(),
        clave: $("#clave").val(),
        celular: $("#celular").val(),
        foto: avatar
    };
    $.post('/inicio/Guardar', obj, function (resp) {
        var r = resp;
        console.log(r);
    });
    limpiar();
}
function Entrar() {
    var user = $("#username").val();
    var pass = $("#pass").val();
    console.log(user + '' + pass);
    $.post('/login/Sesion', { user, pass }, function (resp) {
        var r = resp;
        console.log(r);
    });
}
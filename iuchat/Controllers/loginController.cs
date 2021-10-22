using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using iuchat.Models;

namespace iuchat.Controllers
{
    public class loginController : Controller
    {
        // GET: login
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult Sesion(string user, string pass)
        {
            if(user=="" || pass=="")
            {
                return Json("Falta datos", JsonRequestBehavior.AllowGet);
            }
            else
            {
                Usuario u = new Usuario();
                var Usua = (Usuario)u.obtener(user, pass);
                if (Usua.id_user >0)
                {
                    sesion s = new sesion();
                    s.id_user = Usua.id_user;
                    s.nombres = Usua.nombres;
                    s.apellidos = Usua.apellidos;
                    s.celular = Usua.celular;
                    s.usuario = Usua.usuario;
                    s.clave = Usua.clave;
                    s.foto = Usua.foto;
                    s.onSave();
                   return Json(s.onSave(), JsonRequestBehavior.AllowGet);
                }
                else
                {
                    return Json("Datos no válidos", JsonRequestBehavior.AllowGet);
                }
            }
           
        }
    }
}
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using iuchat.Models;

namespace iuchat.Controllers
{
    public class inicioController : Controller
    {
        // GET: inicio
        public ActionResult Index()
        {
            return View();
        }
       public ActionResult Listar()
        {
            var lista = Usuario.listUser();
            return Json(lista, JsonRequestBehavior.AllowGet);
        }
        public ActionResult Publicaciones()
        {
            var lista = Publicacion.listPubli();
            return Json(lista, JsonRequestBehavior.AllowGet);
        }

        public ActionResult Guardar(Usuario obj)
        {
            string r = string.Empty;
            try
            {
                if (obj.id_user < 0 )
                {
                    obj.addUser();
                    r = "Registrado";
                }
                else
                {
                    obj.updateUser();
                    r = "Actualizado";
                }

            }
            catch (Exception)
            {
                r = "Error";
            }
            return Json(r, JsonRequestBehavior.AllowGet);
        }
        public ActionResult Borrar(Usuario obj)
        {
            string r = string.Empty;
            try
            {
                obj.deleteUser();
                r = "Barrado";
            }
            catch (Exception)
            {
                r = "Error ";
            }
            return Json(r, JsonRequestBehavior.AllowGet);
        }
    }
}
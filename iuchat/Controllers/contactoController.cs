using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using iuchat.Models;

namespace iuchat.Controllers
{
    public class contactoController : Controller
    {
        // GET: contacto
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult Listar()
        {
            var lista = Publicacion.listPubli();
            return Json(lista, JsonRequestBehavior.AllowGet);
        }
        public ActionResult listFriends()
        {
            var amigos = Amigos.listaAmigos();
            return Json(amigos, JsonRequestBehavior.AllowGet);
        }
        public ActionResult Guardar(Publicacion obj)
        {
            string r = string.Empty;
            try
            {
                    obj.addPubli();
                    r = "Registrado";

            }
            catch (Exception)
            {
                r = "Error";
            }
            return Json(r, JsonRequestBehavior.AllowGet);
        }
        public ActionResult Borrar(Publicacion obj)
        {
            string r = string.Empty;
            try
            {
                obj.deletePubli();
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
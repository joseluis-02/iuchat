using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using iuchat.Models;

namespace iuchat.Controllers
{
    public class configController : Controller
    {
        // GET: config
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult User_active()
        {
            return Json(sesion.id, JsonRequestBehavior.AllowGet);
        }
    }
}
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace iuchat.Controllers
{
    public class uichatController : Controller
    {
        // GET: uichat
        public ActionResult Index()
        {
            return View();
        }
    }
}
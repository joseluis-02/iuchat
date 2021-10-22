using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace iuchat.Controllers
{
    public class chatController : Controller
    {
        // GET: chat
        public ActionResult Index()
        {
            return View();
        }
    }
}
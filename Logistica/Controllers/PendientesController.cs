﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Logistica.Controllers
{
    public class PendientesController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult Index_()
        {
            return View();
        }
        public ActionResult Edit()
        {
            return View();
        }
        public ActionResult Edit_()
        {
            return View();
        }
        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }
}
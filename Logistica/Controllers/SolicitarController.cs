using Logistica.Models;
using Logistica.Models.TablaProvinciasModel;
//using Microsoft.Azure.Management.BatchAI.Fluent.Models;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Http;
using System.Reflection;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;
using static Logistica.Controllers.AgendaDatosController;

namespace Logistica.Controllers
{
    public class SolicitarController : Controller
    {
        public static List<AutomovilComercial> lstAutomovilComercial = new List<AutomovilComercial>();
        public static DatosEnvio datos;
        public static Servicio servicio;
        public static int idVehiculo = 1;
        public  ActionResult Index()
        {
            
            return View();
        }
        [HttpPost]
        public ActionResult Index(string tipoLugarRecogida,string razonSoscialOrigen, string contactoOrigen, string telefonoOrigen
            , string paisOrigen, string provinciaSelectOrigen, string localidadSelectOrigen, string direccionOrigen, string cpOrigen
            , string observaOrigen, string tipoLugarDestino, string razonSocialDestino, string contactoDestino, string telefonoDestino
            , string paisDestino, string provinciaSelectDestino, string localidadSelectDestino, string direccionDestino, string cpDestino
            , string observaDestino) {
            datos = new DatosEnvio( tipoLugarRecogida, razonSoscialOrigen, contactoOrigen, telefonoOrigen
                , paisOrigen, provinciaSelectOrigen, localidadSelectOrigen, direccionOrigen, cpOrigen
                , observaOrigen, tipoLugarDestino, razonSocialDestino, contactoDestino,  telefonoDestino
                , paisDestino, provinciaSelectDestino, localidadSelectDestino, direccionDestino, cpDestino
                , observaDestino);
            return RedirectToAction("Index2");
        }
        public ActionResult Index_()
        {
            return View();
        }
        public ActionResult Index2()
        {

            return View();
        }
        //añadimos un vehiculo
        [HttpPost]
        public ActionResult Index2(string id,string accion,string claseVehiculo, string tipoVehiculo
            , string marcaTurismoComercial, string modeloTurismoComercial,string aniosTurismoComercial
            , string versionTurismosComercial, string matriculaTurismosComercial,string alto,string largo, string peso )
        {
            switch (accion)
            {
                case "Crear":
                    lstAutomovilComercial.Add(new AutomovilComercial(idVehiculo, claseVehiculo, tipoVehiculo
                        , marcaTurismoComercial, modeloTurismoComercial, aniosTurismoComercial
                        , versionTurismosComercial, matriculaTurismosComercial,  alto,  largo,  peso));
                    ViewBag.Lista = lstAutomovilComercial;
                    idVehiculo = idVehiculo + 1;
                    break;
                case "Eliminar":
                    var fixedSize = lstAutomovilComercial.ToArray();
                    foreach (var item in fixedSize)
                    {
                        if (item.id == Int32.Parse(id))
                        {
                            lstAutomovilComercial.Remove(item);
                        }
                    }
                    break;
            }
            

            return View(lstAutomovilComercial);
        }
       
        
        [HttpPost]
        public ActionResult Calcular(DateTime fecha, string estado, string tipoEnvio, string autorizacion)
        {

            //Servicio servicio = new Servicio(lstAutomovilComercial,datos,);
            servicio = new Servicio(fecha, estado, tipoEnvio, autorizacion);

            ListaVehiculosController.lstAutomovilComercial = lstAutomovilComercial;
            DatosEnvioController.datos = datos;
            ServicioController.servicio = servicio;





            return RedirectToAction("Index3");
        }
        
       
        public ActionResult Index3()
        {


            return  View();
        }
        
        public async Task<ActionResult> Index3Async()
        {

            var handler = new HttpClientHandler();
            handler.UseCookies = false;

            using (var httpClient = new HttpClient(handler))
            {
                using (var request = new HttpRequestMessage(new HttpMethod("GET"), "http://pruebas.transportauto.es:8083/api/calculos/tarifa/0|BARCELONA|ZARAGOZA|5|Vehiculo|1"))
                {
                    request.Headers.TryAddWithoutValidation("Accept", "application/json, text/plain, */*");
                    request.Headers.TryAddWithoutValidation("Accept-Language", "es-ES,es;q=0.9");
                    request.Headers.TryAddWithoutValidation("Access-Control-Allow-Headers", "X-Requested-With,content-type");
                    request.Headers.TryAddWithoutValidation("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
                    request.Headers.TryAddWithoutValidation("Access-Control-Allow-Origin", "*");
                    request.Headers.TryAddWithoutValidation("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6ImVyaWNpZ2xlc2lhczU1NTY0MjgiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9zaWQiOiIzMzRjMDNkZC00ZDgyLTQ1NjMtYmM1OC1hMmRhNzQwYzFiNGUiLCJyb2xlIjoiQ2xpZW50ZSIsIm5iZiI6MTY2MTMyNjI0NiwiZXhwIjoxNjYxNTg1NDQ2LCJpYXQiOjE2NjEzMjYyNDZ9.81KX3SsQTf92OW-bMBhP0eoVHLXKakad2LYdKOY79Cc");
                    request.Headers.TryAddWithoutValidation("Connection", "keep-alive");
                    request.Headers.TryAddWithoutValidation("Referer", "http://pruebas.transportauto.es:8083/cliente/solicitar/paso/1");
                    request.Headers.TryAddWithoutValidation("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36");
                    request.Headers.TryAddWithoutValidation("Cookie", "_ga=GA1.2.1581193808.1653397961; TawkConnectionTime=0; twk_uuid_5ea2b4b169e9320caac6e107=%7B%22uuid%22%3A%221.1Hx8GyE8aNnry6wyICUs8QSCvOfy06ihpylzLK9unQjE5ajLMroL2jIrINs8fqgb8p8EGMpA6NcWZHZJyQwTLMxCjj1tLdM5q3TnWHrA7Gl7Emd3HRPJ811CpM9HE0rwX6g7puK2DI5q3WVujEd3of%22%2C%22version%22%3A3%2C%22domain%22%3A%22transportauto.es%22%2C%22ts%22%3A1661326528193%7D");

                    var response = await httpClient.SendAsync(request);
                    ViewBag.response = response;
                }
            }
            return View(servicio);
        }
        [HttpPost]
       
        public ActionResult Index_2()
        {
            return View();
        }
        public ActionResult Index_3()
        {
            return View();
        }
        public ActionResult Pago_()
        {
            return View();
        }
        
        public ActionResult Pago()
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
        public ActionResult Prueba(string claseVehiculo,string tipoVehiculo, string marcaTurismoComercial, string modeloTurismoComercial, string aniosTurismoComercial, string versionTurismosComercial, string matriculaTurismosComercial)
        {
            var id = 1;
            //lstAutomovilComercial.Add(new AutomovilComercial(id, claseVehiculo, tipoVehiculo, marcaTurismoComercial, modeloTurismoComercial, aniosTurismoComercial, versionTurismosComercial, matriculaTurismosComercial));
            ViewBag.Lista = lstAutomovilComercial;
            return View(lstAutomovilComercial);
        }
       

    }
}
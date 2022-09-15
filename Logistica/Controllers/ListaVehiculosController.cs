using Logistica.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Logistica.Controllers
{
    public class ListaVehiculosController : ApiController
    {
        public static List<AutomovilComercial> lstAutomovilComercial = new List<AutomovilComercial>();
        
        // GET: api/Prueba
        public IEnumerable<List<AutomovilComercial>> Get()
        {
            yield return lstAutomovilComercial;
        }

        // GET: api/Prueba/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Prueba
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/Prueba/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Prueba/5
        public void Delete(int id)
        {
        }
    }
}

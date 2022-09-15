using Logistica.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Logistica.Controllers
{
    public class ServicioController : ApiController
    {
        public static Servicio servicio;
        // GET: api/Servicio
        public IEnumerable<Servicio> Get()
        {
            yield return servicio;
        }

        // GET: api/Servicio/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Servicio
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/Servicio/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Servicio/5
        public void Delete(int id)
        {
        }
    }
}

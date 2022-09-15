using Logistica.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Logistica.Controllers
{
    public class DatosEnvioController : ApiController
    {
        public static DatosEnvio datos;
        // GET: api/DatosEnvio
        public IEnumerable<DatosEnvio> Get()
        {
            yield return datos;
        }

        // GET: api/DatosEnvio/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/DatosEnvio
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/DatosEnvio/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/DatosEnvio/5
        public void Delete(int id)
        {
        }
    }
}

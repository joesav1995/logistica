using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Logistica.Controllers
{
    public class Datos2Controller : ApiController
    {
        public class Provincia
        {
            public int IdComunidad { get; set; }
            public string Nombre { get; set; }
        }

        public class Municipios
        {
            public int Provincia_Id { get; set; }
            public string Descripcion { get; set; }
            public string NombreProvincia { get; set; }
        }
        
        public IEnumerable<Municipios> Get()
        {
            using (Models.qcu947Entities2 db = new Models.qcu947Entities2())
            {
                var lst = (from d in db.Munincipios
                           join p in db.Provincias on d.PROVINCIA_ID equals p.Id
                           select new Municipios
                           {
                               Provincia_Id = d.PROVINCIA_ID,
                               Descripcion = d.DESCRIPCION,
                               NombreProvincia = p.Nombre
                           }).ToList();
                return lst;
            }

        }
    }
}

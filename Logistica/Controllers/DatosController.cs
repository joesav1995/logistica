using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Logistica.Controllers
{
    public class DatosController : ApiController
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
        }
        public IEnumerable<Provincia> Get()
        {

            using (Models.qcu947Entities2 db = new Models.qcu947Entities2())
            {
                var lst = (from d in db.Provincias
                           select new Provincia
                           {
                               IdComunidad = d.Id,
                               Nombre = d.Nombre
                           }).ToList();
                return lst;
                /*var= List<Tablavista....>*/
            }
        }
        public IEnumerable<Municipios> Get(string tabla)
        {
            using (Models.qcu947Entities2 db = new Models.qcu947Entities2())
            {
                var lst = (from d in db.Munincipios
                           select new Municipios
                           {
                               Provincia_Id = d.PROVINCIA_ID,
                               Descripcion = d.DESCRIPCION
                           }).ToList();
                return lst;
            }

        }
    }
}

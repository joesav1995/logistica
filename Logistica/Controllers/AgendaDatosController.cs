using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;

namespace Logistica.Controllers
{
    public class AgendaDatosController : ApiController
    {
        public class Agenda
        {
            public string razonSocial { get; set; }
            public string provincia { get; set; }
            public string TipoLugar { get; set; }
            public string contacto { get; set; }
            public int telefono { get; set; }
            public string direccion { get; set; }
            public string codigoPostal { get; set; }
            public string localidad { get; set; }
        }
        public async Task<IEnumerable<Agenda>> Get()
        {
            var httpClient = new HttpClient();
            var json = await httpClient.GetStringAsync("https://apitra.transportauto.es/api/Agenda/user/AB0EE8AF-426B-48E7-9E21-2D681A3A31C7");

            List<Agenda> agenda = JsonConvert.DeserializeObject<List<Agenda>>(json);
            /*using (Models.qcu947Entities2 db = new Models.qcu947Entities2())
            {
                var lst = (from d in db.Provincias
                           select new Provincia
                           {
                               IdComunidad = d.Id,
                               Nombre = d.Nombre
                           }).ToList();
                return lst;
                /*var= List<Tablavista....>
            }*/
            return agenda;
        }
    }
}

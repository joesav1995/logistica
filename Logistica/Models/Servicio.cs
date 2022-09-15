using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Web;

namespace Logistica.Models
{
    public class Servicio
    {
        
       
        public DateTime fecha { get; set; }
        public string estado { get; set; }
        public string TipoEnvio { get; set; }
        public string autorizacion { get; set; }

        public Servicio(){

        }
        public Servicio(  DateTime fecha, string estado, string tipoEnvio,string autorizacion)
        {
            
          
            this.fecha = fecha;
            this.estado = estado;
            this.TipoEnvio = tipoEnvio;
            this.autorizacion = autorizacion;
        }
    }
}
//------------------------------------------------------------------------------
// <auto-generated>
//     Este código se generó a partir de una plantilla.
//
//     Los cambios manuales en este archivo pueden causar un comportamiento inesperado de la aplicación.
//     Los cambios manuales en este archivo se sobrescribirán si se regenera el código.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Logistica.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class Transporte_Observaciones
    {
        public int ID { get; set; }
        public Nullable<System.Guid> IdUsuario { get; set; }
        public string Consulta { get; set; }
        public string Respuesta { get; set; }
        public Nullable<int> IdTransporteCab { get; set; }
        public Nullable<System.DateTime> FechaConsulta { get; set; }
        public Nullable<System.DateTime> FechaRespuesta { get; set; }
        public Nullable<bool> AnotacionInterna { get; set; }
    }
}
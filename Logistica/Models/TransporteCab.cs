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
    
    public partial class TransporteCab
    {
        public int ID { get; set; }
        public Nullable<System.Guid> IdUsuarios { get; set; }
        public Nullable<int> IdFacturaGlobal { get; set; }
        public Nullable<System.DateTime> FechaSolicitud { get; set; }
        public string Estado { get; set; }
        public string IdTransporte { get; set; }
        public string PrecioBase { get; set; }
        public string IVA { get; set; }
        public string PrecioTotal { get; set; }
        public Nullable<System.DateTime> FechaFinalizacion { get; set; }
        public Nullable<int> IdUsuariosServicios { get; set; }
        public string Modo { get; set; }
        public byte[] CartaLiberacion { get; set; }
        public string NombreArchivo { get; set; }
        public Nullable<int> LongitudArchivo { get; set; }
        public string Transportista { get; set; }
        public string PrecioTransportista { get; set; }
    }
}

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
    
    public partial class BancoMaster
    {
        public int ID { get; set; }
        public string NOMBRE { get; set; }
        public string DIRECCION { get; set; }
        public string CP { get; set; }
        public Nullable<int> POBLACION_ID { get; set; }
        public Nullable<int> PROVINCIA_ID { get; set; }
        public string TELEFONO { get; set; }
        public string FAX { get; set; }
        public string EMAIL { get; set; }
        public string WEB { get; set; }
        public string CONTACTO1 { get; set; }
        public string APELLIDOCT1 { get; set; }
        public string CONTACTO2 { get; set; }
        public string APELLIDOCT2 { get; set; }
        public string OBSERVACIONES { get; set; }
        public Nullable<System.DateTime> FECHAALTA { get; set; }
        public Nullable<System.DateTime> FECHAMODIFICACION { get; set; }
    }
}
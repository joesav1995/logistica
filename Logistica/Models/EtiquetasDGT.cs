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
    
    public partial class EtiquetasDGT
    {
        public int ID { get; set; }
        public string Etiquetas { get; set; }
        public string Libre { get; set; }
        public string Fichero { get; set; }
        public Nullable<System.DateTime> FechaCompra { get; set; }
        public Nullable<System.DateTime> FechaUso { get; set; }
    }
}
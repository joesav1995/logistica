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
    
    public partial class A_AnarByRoute
    {
        public int ID { get; set; }
        public Nullable<double> lat { get; set; }
        public Nullable<double> lon { get; set; }
        public Nullable<double> tempo { get; set; }
        public Nullable<bool> IsStop { get; set; }
        public int LineID { get; set; }
        public string Name { get; set; }
    }
}

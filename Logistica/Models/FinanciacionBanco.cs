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
    
    public partial class FinanciacionBanco
    {
        public int Id { get; set; }
        public Nullable<int> FinanciacionID { get; set; }
        public string Entidad { get; set; }
        public string Oficina { get; set; }
        public string DC { get; set; }
        public string Cuenta { get; set; }
        public string Nombre { get; set; }
    
        public virtual Financiacion Financiacion { get; set; }
    }
}

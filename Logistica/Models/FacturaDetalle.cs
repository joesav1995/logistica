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
    
    public partial class FacturaDetalle
    {
        public int Id { get; set; }
        public Nullable<int> NumeroFactura { get; set; }
        public Nullable<int> Cantidad { get; set; }
        public Nullable<int> IdFactura { get; set; }
        public Nullable<int> IdConcepto { get; set; }
        public string Concepto { get; set; }
        public Nullable<System.DateTime> Fecha { get; set; }
        public Nullable<double> PrecioUnidad { get; set; }
        public Nullable<double> PrecioTotal { get; set; }
        public Nullable<System.DateTime> FechaAlta { get; set; }
        public Nullable<System.DateTime> FechaModificacion { get; set; }
        public Nullable<double> PorcentajeIva { get; set; }
        public Nullable<System.Guid> Estado { get; set; }
        public string SerieFactura { get; set; }
    
        public virtual FacturaGlobal FacturaGlobal { get; set; }
        public virtual FacturaServicio FacturaServicio { get; set; }
    }
}

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
    
    public partial class SaldoServiciosLin
    {
        public int IdSaldoServiciosLin { get; set; }
        public int IdSaldoServiciosCab { get; set; }
        public int IdUsuariosServicios { get; set; }
        public string Descripcion { get; set; }
        public double ImporteMovimiento { get; set; }
        public System.DateTime FechaMovimiento { get; set; }
        public double ImporteIva { get; set; }
        public bool TransferenciaRealizada { get; set; }
        public string Concepto { get; set; }
        public Nullable<bool> ValidacionCliente { get; set; }
    
        public virtual SaldoServiciosCab SaldoServiciosCab { get; set; }
    }
}
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
    
    public partial class SaldoServiciosCab
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public SaldoServiciosCab()
        {
            this.SaldoServiciosLin = new HashSet<SaldoServiciosLin>();
        }
    
        public int IdSaldoServiciosCab { get; set; }
        public System.Guid IdUsuarios { get; set; }
        public double SaldoActual { get; set; }
        public double CreditoActual { get; set; }
        public double CreditoInicial { get; set; }
        public bool CreditoIlimitado { get; set; }
        public double ImporteCargo { get; set; }
        public double ImporteAbono { get; set; }
    
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<SaldoServiciosLin> SaldoServiciosLin { get; set; }
    }
}
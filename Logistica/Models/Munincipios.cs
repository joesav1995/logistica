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
    
    public partial class Munincipios
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public Munincipios()
        {
            this.Alertas = new HashSet<Alertas>();
            this.Enlaces = new HashSet<Enlaces>();
            this.Financiacion_Solicitud = new HashSet<Financiacion_Solicitud>();
            this.Financiacion_Solicitud1 = new HashSet<Financiacion_Solicitud>();
            this.Financiacion_Solicitud2 = new HashSet<Financiacion_Solicitud>();
            this.FinanciacionComprador = new HashSet<FinanciacionComprador>();
        }
    
        public int ID { get; set; }
        public int PROVINCIA_ID { get; set; }
        public string DESCRIPCION { get; set; }
        public short zonaA { get; set; }
    
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Alertas> Alertas { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Enlaces> Enlaces { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Financiacion_Solicitud> Financiacion_Solicitud { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Financiacion_Solicitud> Financiacion_Solicitud1 { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Financiacion_Solicitud> Financiacion_Solicitud2 { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<FinanciacionComprador> FinanciacionComprador { get; set; }
    }
}

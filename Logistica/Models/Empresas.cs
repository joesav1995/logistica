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
    
    public partial class Empresas
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public Empresas()
        {
            this.Facturacion = new HashSet<Facturacion>();
            this.FacturaGlobal = new HashSet<FacturaGlobal>();
        }
    
        public int Id { get; set; }
        public string Nombre { get; set; }
        public string Nif { get; set; }
        public string Direccion { get; set; }
        public string CodigoPostal { get; set; }
        public string Localidad { get; set; }
        public string Telefono { get; set; }
        public string Fax { get; set; }
        public string PathLogo { get; set; }
        public string CCCBanco { get; set; }
        public string CCCOficina { get; set; }
        public string CCCDc { get; set; }
        public string CCCCuenta { get; set; }
        public string Email { get; set; }
        public string Web { get; set; }
        public string IBAN { get; set; }
        public string BIC { get; set; }
    
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Facturacion> Facturacion { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<FacturaGlobal> FacturaGlobal { get; set; }
    }
}

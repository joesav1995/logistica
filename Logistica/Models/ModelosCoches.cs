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
    
    public partial class ModelosCoches
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public ModelosCoches()
        {
            this.CochesRobados = new HashSet<CochesRobados>();
        }
    
        public int Id { get; set; }
        public string Nombre { get; set; }
        public string Mercado { get; set; }
        public int Orden { get; set; }
        public Nullable<int> id_ext { get; set; }
        public int id_marcacoches { get; set; }
        public Nullable<System.DateTime> FechaAlta { get; set; }
        public Nullable<System.DateTime> FechaModificacion { get; set; }
    
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<CochesRobados> CochesRobados { get; set; }
    }
}
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
    
    public partial class UsuariosServiciosSeguimiento
    {
        public long Id_SeguimientoServicios { get; set; }
        public System.Guid IdUsuario { get; set; }
        public int IdFacturaServicio { get; set; }
        public System.DateTime fechaAlta { get; set; }
    
        public virtual FacturaServicio FacturaServicio { get; set; }
    }
}

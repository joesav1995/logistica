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
    
    public partial class UsuariosBoletines
    {
        public System.Guid UsuariosFK { get; set; }
        public int BoletinesFK { get; set; }
        public System.DateTime FechaAlta { get; set; }
        public System.DateTime FechaModificacion { get; set; }
    }
}
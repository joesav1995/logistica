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
    
    public partial class CochesRobados
    {
        public int Id { get; set; }
        public string Matricula { get; set; }
        public string Bastidor { get; set; }
        public string Descripcion { get; set; }
        public System.DateTime FechaPublicacion { get; set; }
        public System.Guid Usuario { get; set; }
        public System.DateTime FechaAlta { get; set; }
        public System.DateTime FechaModificacion { get; set; }
        public int IdModelo { get; set; }
    
        public virtual ModelosCoches ModelosCoches { get; set; }
    }
}

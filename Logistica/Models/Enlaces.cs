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
    
    public partial class Enlaces
    {
        public int Id { get; set; }
        public string Nombre { get; set; }
        public string Descripcion { get; set; }
        public string URL { get; set; }
        public string Imagen { get; set; }
        public Nullable<int> CantidadImagen { get; set; }
        public Nullable<int> Orden { get; set; }
        public Nullable<System.DateTime> FechaAlta { get; set; }
        public Nullable<System.DateTime> FechaModificacion { get; set; }
        public Nullable<int> IdCategoriasEnlaces { get; set; }
        public Nullable<int> IdMunincipio { get; set; }
    
        public virtual CategoriasEnlaces CategoriasEnlaces { get; set; }
        public virtual Munincipios Munincipios { get; set; }
    }
}
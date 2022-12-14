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
    
    public partial class AnuncioCoches
    {
        public int Id { get; set; }
        public bool Activo { get; set; }
        public Nullable<bool> Profesional { get; set; }
        public int ID_MARCA { get; set; }
        public string MARCA { get; set; }
        public int ID_MODELO { get; set; }
        public string MODELO { get; set; }
        public Nullable<int> ID_VERSION { get; set; }
        public Nullable<int> ID_COMBUSTIBLE { get; set; }
        public string COMBUSTIBLE { get; set; }
        public Nullable<int> ID_CAMBIO { get; set; }
        public string CAMBIO { get; set; }
        public int ID_PROVINCIA { get; set; }
        public string PROVINCIA { get; set; }
        public Nullable<int> ID_COLOREXTERIOR { get; set; }
        public string COLOREXTERIOR { get; set; }
        public string CarroceriaId { get; set; }
        public string Carroceria { get; set; }
        public Nullable<int> TipoVentaCocheId { get; set; }
        public string TipoVentaCoche { get; set; }
        public string Version { get; set; }
        public string VersionUrl { get; set; }
        public Nullable<double> Precio { get; set; }
        public string Descripcion { get; set; }
        public Nullable<int> Km { get; set; }
        public int MesMatriculacion { get; set; }
        public Nullable<int> AnyoMatriculacion { get; set; }
        public Nullable<int> PotenciaKW { get; set; }
        public Nullable<int> PotenciaCV { get; set; }
        public Nullable<int> Puertas { get; set; }
        public Nullable<int> CajaCambio { get; set; }
        public string CajaCambioText { get; set; }
        public Nullable<bool> Metalizado { get; set; }
        public Nullable<bool> Estado { get; set; }
        public string ConfirmationCode { get; set; }
        public Nullable<System.Guid> UserId { get; set; }
        public bool Destacado { get; set; }
        public Nullable<System.DateTime> FechaCaducidadDestacado { get; set; }
        public string Imagen { get; set; }
        public Nullable<int> CantidadImagen { get; set; }
        public string SerieText { get; set; }
        public Nullable<int> SerieBitMap1 { get; set; }
        public Nullable<int> SerieBitMap2 { get; set; }
        public Nullable<int> SerieBitMap3 { get; set; }
        public Nullable<int> SerieBitMap4 { get; set; }
        public Nullable<int> SerieBitMap5 { get; set; }
        public string ExtrasText { get; set; }
        public Nullable<int> ExtrasBitMap1 { get; set; }
        public Nullable<int> ExtrasBitMap2 { get; set; }
        public Nullable<int> ExtrasBitMap3 { get; set; }
        public Nullable<int> ExtrasBitMap4 { get; set; }
        public Nullable<int> ExtrasBitMap5 { get; set; }
        public Nullable<int> ExtrasBitMap6 { get; set; }
        public Nullable<int> ExtrasBitMap7 { get; set; }
        public int ActualizacionesSMS { get; set; }
        public Nullable<System.DateTime> FechaActualizacionSMS { get; set; }
        public Nullable<System.DateTime> FechaCaducidad { get; set; }
        public System.DateTime FechaModificacion { get; set; }
        public System.DateTime FechaAlta { get; set; }
        public Nullable<bool> Carrusel { get; set; }
        public Nullable<System.DateTime> FechaCaducidadCarrusel { get; set; }
        public int GarantiaId { get; set; }
        public Nullable<int> TipoCombustibleId { get; set; }
        public string TipoCombustible { get; set; }
        public Nullable<System.DateTime> FechaImportacion { get; set; }
        public Nullable<int> IdImportacion { get; set; }
        public string IdExternoImportacion { get; set; }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Logistica.Models
{
    public class DatosEnvio
    {
        //datos origen
        public string tipoOrigen { get; set; }
        public string razonSocialOrigen { get; set; }
        public string personaContactoOrigen { get; set; }
        public string telefonoOrigen { get; set; }
        public string paisOrigen { get; set; }
        public string provinciaOrigen { get; set; }
        public string localdadOrigen { get; set; }
        public string direccionOrigen { get; set; }
        public string CPOrigen { get; set; }
        public string observacionesOrigen { get; set; }

        //datos destino
        public string tipoDestino { get; set; }
        public string razonSocialDestino { get; set; }
        public string personaContactoDestino { get; set; }
        public string telefonoDestino { get; set; }
        public string paisDestino { get; set; }
        public string provinciaDestino { get; set; }
        public string localdadDestino { get; set; }
        public string direccionDestino { get; set; }
        public string CPDestino { get; set; }
        public string observacionesDestino { get; set; }


        public DatosEnvio(string tipoOrigen, string razonSocialOrigen, string personaContactoOrigen, string telefonoOrigen, string paisOrigen,
            string provinciaOrigen, string localdadOrigen, string direccionOrigen, string CPOrigen, string observacionesOrigen, string tipoDestino, 
            string razonSocialDestino, string personaContactoDestino, string telefonoDestino, string paisDestino, string provinciaDestino, 
            string localdadDestino, string direccionDestino, string CPDestino, string observacionesDestino){

            //Datos origen
            this.tipoOrigen = tipoOrigen;
            this.razonSocialOrigen = razonSocialOrigen;
            this.personaContactoOrigen = personaContactoOrigen;
            this.telefonoOrigen = telefonoOrigen;
            this.paisOrigen = paisOrigen;
            this.provinciaOrigen = provinciaOrigen;
            this.localdadOrigen = localdadOrigen;
            this.direccionOrigen = direccionOrigen;
            this.CPOrigen = CPOrigen;
            this.observacionesOrigen = observacionesOrigen;

            //Datos destino
            this.tipoDestino = tipoDestino;
            this.razonSocialDestino = razonSocialDestino;
            this.personaContactoDestino = personaContactoDestino;
            this.telefonoDestino = telefonoDestino;
            this.paisDestino = paisDestino;
            this.provinciaDestino = provinciaDestino;
            this.localdadDestino = localdadDestino;
            this.direccionDestino = direccionDestino;
            this.CPDestino = CPDestino;
            this.observacionesDestino = observacionesDestino;

        }
        public DatosEnvio()
        {
        }
        
    }
}
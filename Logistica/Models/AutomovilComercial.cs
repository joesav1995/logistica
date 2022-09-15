using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Logistica.Models
{
   
    public class AutomovilComercial
    {

        public int id { get; set; }
        public string claseVehiculo { get; set; }
        public string tipoVehiculo { get; set; }
        public string marcaTurismoComercial { get; set; }
        public string modeloTurismoComercial { get; set; }
        public string aniosTurismoComercial { get; set; }
        public string versionTurismosComercial { get; set; }
        public string matriculaTurismosComercial { get; set; }
        public string alto { get; set; }
        public string largo { get; set; }
        public string peso { get; set; }




        public AutomovilComercial(int id,string claseVehiculo, string tipoVehiculo, string marcaTurismoComercial
            , string modeloTurismoComercial, string aniosTurismoComercial, string versionTurismosComercial
            , string matriculaTurismosComercial, string alto, string largo, string peso)
        {
            this.id = id;
            this.claseVehiculo = claseVehiculo;
            this.tipoVehiculo = tipoVehiculo;
            this.marcaTurismoComercial = marcaTurismoComercial;
            this.modeloTurismoComercial = modeloTurismoComercial;
            this.aniosTurismoComercial = aniosTurismoComercial;
            this.versionTurismosComercial = versionTurismosComercial;
            this.matriculaTurismosComercial = matriculaTurismosComercial;
            this.alto = alto;
            this.largo = largo;
            this.peso = peso;
        }
        public AutomovilComercial()
        {
            
        }
        
    }
   
}
var token = "";

window.addEventListener('load',
    function () {
       

        var myHeaders = new Headers();
        myHeaders.append("Accept", "application/json, text/plain, /");
        myHeaders.append("Accept-Language", "es-ES,es;q=0.9,en;q=0.8");
        myHeaders.append("Access-Control-Allow-Headers", "X-Requested-With,content-type");
        myHeaders.append("Access-Control-Allow-Methods", "GET");
        myHeaders.append("Access-Control-Allow-Origin", "*");
        myHeaders.append("Connection", "keep-alive");
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Origin", "http://pruebas.transportauto.es:8083");
        myHeaders.append("Referer", "http://pruebas.transportauto.es:8083/");
        myHeaders.append("User-Agent", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36");



        var raw = '{"username":"atencioncliente_transportauto","password":"123456","applicationName":"TransportAuto"}';

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://apiusers.transportauto.es/api/user/authenticate", requestOptions)
            .then(function (serverPromise) {
                serverPromise.json()
                    .then(function (usuario) {
                        //console.log("usuario: "+usuario.token); 
                        /*recuperamos datos de la agenda del usuario*/
                        token = usuario.token;
                    })
                    .catch(function (e) {
                        console.log(e);
                    });
            })
        turismoComercial();
        try {
            switch (document.getElementById("datoClaseVehiculo").value) {
                case "Turismo-Comercial":
                    document.getElementById("otrosVehiculos").classList.add("invisible");
                    document.getElementById("Moto").classList.add("invisible");
                    document.getElementById("Turismo-Comercial").classList.remove("invisible");
                    break;
                case "Industrial":
                    document.getElementById("otrosVehiculos").classList.remove("invisible");
                    document.getElementById("Moto").classList.add("invisible");
                    document.getElementById("Turismo-Comercial").classList.add("invisible");
                    break;
                case "Autocaravana":
                    document.getElementById("otrosVehiculos").classList.remove("invisible");
                    document.getElementById("Moto").classList.add("invisible");
                    document.getElementById("Turismo-Comercial").classList.add("invisible");
                    break;
                case "Tractor":
                    document.getElementById("otrosVehiculos").classList.remove("invisible");
                    document.getElementById("Moto").classList.add("invisible");
                    document.getElementById("Turismo-Comercial").classList.add("invisible");
                    break;
                case "Moto":
                    document.getElementById("otrosVehiculos").classList.add("invisible");
                    document.getElementById("Moto").classList.remove("invisible");
                    document.getElementById("Turismo-Comercial").classList.add("invisible");
                    break;
            }

        } catch (error) {

        }
        
        
       
    });
var tipoVehiculo = document.getElementById("tipoVehiculo");
tipoVehiculo.addEventListener('change',
        function () { 
                

            switch (tipoVehiculo.value) {

                case "Turismo-Comercial":
                    document.getElementById("otrosVehiculos").classList.add("invisible");
                    document.getElementById("Moto").classList.add("invisible");
                    document.getElementById("Turismo-Comercial").classList.remove("invisible");

                    document.getElementById("vehiculoMoto").classList.remove("invisible");
                    turismoComercial();
                    /*try {

                        if (document.getElementById("datoClaseVehiculo").value == "Turismo-Comercial") {

                        } else {
                            document.getElementById("btnCrear").setAttribute('disabled', '')
                        }
                    } catch (error) {

                    }*/
                    //console.log("Turismo-Comercial");
                    break;
                case "Industrial":
                    document.getElementById("otrosVehiculos").classList.remove("invisible");
                    document.getElementById("Moto").classList.add("invisible");
                    document.getElementById("Turismo-Comercial").classList.add("invisible");

                    //document.getElementById("vehiculoMoto").classList.add("invisible");
                    indusCaravaTractor();
                   
                   
                    api("http://apiveh.transportauto.es/api/vehiculos/marcas/Industrial", "Industrial");
                    //.log("Industrial");
                    break;
                case "Autocaravana":
                    document.getElementById("otrosVehiculos").classList.remove("invisible");
                    document.getElementById("Moto").classList.add("invisible");
                    document.getElementById("Turismo-Comercial").classList.add("invisible");

                    //document.getElementById("vehiculoMoto").classList.add("invisible");
                    indusCaravaTractor();
                    
                    api("http://apiveh.transportauto.es/api/vehiculos/marcas/Autocaravana", "Autocaravana");
                    console.log("Autocaravana");
                    break;
                case "Tractor":
                    document.getElementById("otrosVehiculos").classList.remove("invisible");
                    document.getElementById("Moto").classList.add("invisible");
                    document.getElementById("Turismo-Comercial").classList.add("invisible");

                    //document.getElementById("vehiculoMoto").classList.add("invisible");
                    indusCaravaTractor();
                    
                    api("http://apiveh.transportauto.es/api/vehiculos/marcas/Tractor", "Tractor");
                    //console.log("Tractor");
                    break;
                case "Moto":
                    document.getElementById("otrosVehiculos").classList.add("invisible");
                    document.getElementById("Moto").classList.remove("invisible");
                    document.getElementById("Turismo-Comercial").classList.add("invisible");

                    //document.getElementById("vehiculoMoto").classList.remove("invisible");
                    moto();
                    
                    api("http://apiveh.transportauto.es/api/vehiculos/marcas/Moto", "Moto");
                    //console.log("Moto");
                    break;
            }
        });
var autorizacion = document.getElementById("autorizacion");
autorizacion.addEventListener('change',
    function () {
       
        console.log("autorizacion:" + autorizacion.value);
        console.log("fecha:" + document.getElementById("fecha").value);
    });
//Rellenamos marca
function selectTipoVehiculo() {
    
    var valTurismoComercial = document.getElementById("turismoComercial");
    switch (valTurismoComercial.value) {

        case "Turismo":
            api("http://apiveh.transportauto.es/api/vehiculos/marcas/Turismo","Turismo");
            

            break;
        case "Comercial":
            api("http://apiveh.transportauto.es/api/vehiculos/marcas/Comercial", "Comercial");

            break;

    }

}
//Rellenamos modelo
function selectMarca() {
    var valTurismoComercial = document.getElementById("turismoComercial");
    var marca = document.getElementById("marcaTurismoComercial");
    switch (valTurismoComercial.value) {

        case "Turismo":
            api("http://apiveh.transportauto.es/api/vehiculos/modelos/Turismo/" + marca.value, "Modelo");


            break;
        case "Comercial":
            api("http://apiveh.transportauto.es/api/vehiculos/modelos/Comercial/" + marca.value, "Modelo");

            break;

    }
}
//Rellenamos año
function selectModelo() {
    var valTurismoComercial = document.getElementById("turismoComercial");
    var marca = document.getElementById("marcaTurismoComercial");
    var modelo = document.getElementById("modeloTurismoComercial");
    switch (valTurismoComercial.value) {

        case "Turismo":
            api("http://apiveh.transportauto.es/api/vehiculos/anios/Turismo/" + marca.value+"/"+modelo.value, "Año");


            break;
        case "Comercial":
            api("http://apiveh.transportauto.es/api/vehiculos/anios/Turismo/" + marca.value + "/"+modelo.value , "Año");

            break;

    }
}
//Rellenamos vesion
function selectAnios() {
    var valTurismoComercial = document.getElementById("turismoComercial");
    var marca = document.getElementById("marcaTurismoComercial");
    var modelo = document.getElementById("modeloTurismoComercial");
    var año = document.getElementById("aniosTurismoComercial");
    
    switch (valTurismoComercial.value) {

        case "Turismo":
            api("http://apiveh.transportauto.es/api/vehiculos/versiones/Turismo/" + marca.value + "/" + modelo.value + "/" + año.value, "Version");


            break;
        case "Comercial":
            api("http://apiveh.transportauto.es/api/vehiculos/versiones/Turismo/" + marca.value + "/" + modelo.value + "/" + año.value, "Version");

            break;

    }
}
//Rellenamos modelo moto
function selectaModelo() {
    var marcaMoto = document.getElementById("marcaMoto");
    

    api("http://apiveh.transportauto.es/api/vehiculos/modelos/Moto/" + marcaMoto.value , "ModeloMoto");
}
//Rellenamos año moto
function selectAniosMoto() {
    var marcaMoto = document.getElementById("marcaMoto");
    var modeloMoto = document.getElementById("modeloMoto");


    api("http://apiveh.transportauto.es/api/vehiculos/anios/Moto/" + marcaMoto.value + "/" + modeloMoto.value, "AñoMoto");
}
//Rellenamos version moto
function selectVersion() {
    var marcaMoto = document.getElementById("marcaMoto");
    var modeloMoto = document.getElementById("modeloMoto");
    var anioMoto = document.getElementById("anioMoto");


    api("http://apiveh.transportauto.es/api/vehiculos/versiones/Moto/" + marcaMoto.value + "/" + modeloMoto.value + "/" + anioMoto.value, "VersionMoto");
}
function api(url,tipo) {
    var html = "";
    var headers = new Headers();
    headers.append("Accept", "application/json, text/plain, /");
    headers.append("Accept-Language", "es-ES,es;q=0.9,en;q=0.8");
    headers.append("Access-Control-Allow-Headers", "X-Requested-With,content-type");
    headers.append("Access-Control-Allow-Methods", "GET");
    headers.append("Access-Control-Allow-Origin", "*");
    headers.append("Connection", "keep-alive");
    headers.append("Content-Type", "application/json");
    headers.append("Origin", "http://pruebas.transportauto.es:8083");
    headers.append("Referer", "http://pruebas.transportauto.es:8083/");
    headers.append("User-Agent", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36");
    headers.append("Authorization", "Bearer " + token);


    var requestOptions2 = {
        method: 'GET',
        headers: headers,
        // body: raw,
        redirect: 'follow'
    };

    fetch(url, requestOptions2)
    //fetch("http://apitra.transportauto.es/api/Agenda/" + id, requestOptions2)
        .then(function (serverPromise2) {
            serverPromise2.json()
                .then(function (resultado) {
                    //console.log("agenda: " + agenda); 
                    html += "<option value='SELECCIONA'>SELECCIONA</option>";
                    switch (tipo) {

                        case "Turismo":
                            resultado.forEach(function (element) {
                                //console.log(element);
                                html += "<option value='" + element + "'>" + element + "</option>";

                            })
                            document.getElementById("marcaTurismoComercial").innerHTML = html;
                            break;
                        case "Comercial":
                            resultado.forEach(function (element) {
                                //console.log(element);
                                html += "<option value='" + element + "'>" + element + "</option>";

                            })
                            document.getElementById("marcaTurismoComercial").innerHTML = html;

                            break;
                        case "Modelo":
                            console.log(resultado);
                            resultado.forEach(function (element) {
                                //console.log(element);
                                html += "<option value='" + element + "'>" + element + "</option>";

                            })
                            document.getElementById("modeloTurismoComercial").innerHTML = html;

                            break;
                        case "Año":
                            console.log(resultado);
                            resultado.forEach(function (element) {
                                //console.log(element);
                                html += "<option value='" + element + "'>" + element + "</option>";

                            })
                            document.getElementById("aniosTurismoComercial").innerHTML = html;

                            break;
                        case "Version":
                            console.log(resultado);
                            resultado.forEach(function (element) {
                                //console.log(element);
                                html += "<option value='" + element.version + "'>" + element.version + "</option>";

                            })
                            document.getElementById("versionTurismosComercial").innerHTML = html;

                            break;
                        case "Industrial":
                            console.log(resultado);
                            resultado.forEach(function (element) {
                                console.log(element);
                                html += "<option value='" + element + "'>" + element + "</option>";

                            })
                            document.getElementById("marcaIndusCaravaTractor").innerHTML = html;

                            break;
                        case "Tractor":
                            console.log(resultado);
                            resultado.forEach(function (element) {
                                console.log(element);
                                html += "<option value='" + element + "'>" + element + "</option>";

                            })
                            document.getElementById("marcaIndusCaravaTractor").innerHTML = html;

                            break;
                        case "Autocaravana":
                            console.log(resultado);
                            resultado.forEach(function (element) {
                                console.log(element);
                                html += "<option value='" + element + "'>" + element + "</option>";

                            })
                            document.getElementById("marcaIndusCaravaTractor").innerHTML = html;

                            break;
                        case "Moto":
                            console.log(resultado);
                            resultado.forEach(function (element) {
                                console.log(element);
                                html += "<option value='" + element + "'>" + element + "</option>";

                            })
                            document.getElementById("marcaMoto").innerHTML = html;

                            break;
                        case "ModeloMoto":
                            console.log(resultado);
                            resultado.forEach(function (element) {
                                console.log(element);
                                html += "<option value='" + element + "'>" + element + "</option>";

                            })
                            document.getElementById("modeloMoto").innerHTML = html;

                            break;
                        case "AñoMoto":
                            console.log(resultado);
                            resultado.forEach(function (element) {
                                console.log(element);
                                html += "<option value='" + element + "'>" + element + "</option>";

                            })
                            document.getElementById("anioMoto").innerHTML = html;

                            break;
                        case "VersionMoto":
                            console.log(resultado);
                            resultado.forEach(function (element) {
                                console.log(element);
                                html += "<option value='" + element.version + "'>" + element.version + "</option>";

                            })
                            document.getElementById("versionMoto").innerHTML = html;

                            break;
                    }
                    
                })
                .catch(function (e2) {
                    console.log(e2);
                });
        })

}
function turismoComercial() {
    var html = "";
    var datoClaseVehi = "";

    try {
        datoClaseVehi = document.getElementById("datoClaseVehiculo").value;

    } catch (error) {

    }
    document.getElementById("vehiculos").innerHTML = html;
   
    html += "<div id='vehiculo1'class='item-vehicules-contract '>";
        html += "<div class='row anti-row'>";
            html += "<div class='col-md-4 plr2'>";
                html += "<label>Tipo</label>";
                html += "<select id='turismoComercial' name='tipoVehiculo' class='form-control select2s select2-clase ng-untouched ng-pristine ng-invalid' onchange='selectTipoVehiculo()' data-index='0' data-select2-id='clase0' >";
                    html += "<option value='' selected='' data-select2-id='1781'>SELECCIONA</option>";
                    html += "<option value='Turismo' data-select2-id='1829'>AUTOMOVIL</option>";
                    html += "<option value='Comercial' data-select2-id='1830'>COMERCIAL</option>";
                html += "</select>";
            html += "</div>";
            html += "<div class='col-md-4 plr2'>";
                html += "<label>Marca</label>";
                html += "<select id='marcaTurismoComercial' name='marcaTurismoComercial' class='form-control' onchange='selectMarca()'>";
                    html += "<option value='' disabled selected>Selecciona...</option>";
                    
                html += "</select>";
            html += "</div>";
            html += "<div class='col-md-4 plr2'>";
                html += "<label>Modelo</label>";
                html += "<select id='modeloTurismoComercial' name='modeloTurismoComercial' class='form-control' onchange='selectModelo()'>";
                    html += "<option value='' disabled selected>Selecciona...</option>";
                   
                html += "</select>";
            html += "</div>";
        html += "</div>";
        html += "<div class='row anti-row mb-3'>";
            html += "<div class='col-md-4 plr2'>";
                html += "<label>Año</label>";
                html += "<select id='aniosTurismoComercial' name='aniosTurismoComercial' class='form-control' onchange='selectAnios()'>";
                    html += "<option value='' disabled selected>Selecciona...</option>";
                   
                html += "</select>";
            html += "</div>";
            html += "<div class='col-md-4 plr2'>";
                html += "<label>Versión</label>";
                html += "<select id='versionTurismosComercial' name='versionTurismosComercial' class='form-control'>";
                    html += "<option value='' disabled selected>Selecciona...</option>";
                    
                html += "</select>";
            html += "</div>";
            html += "<div class='col-md-4 plr2'>";
                html += "<label>Matrícula</label>";
                html += "<input class='form-control' name='matriculaTurismosComercial' type='text' placeholder='' />";
            html += "</div>";
        html += "</div>";
        html += "<div class='row anti-row mb-3'>";
            /*html += "<div class='col-md-6 col-xl-10 plr2'>";
            html += "</div>";*/
            html += "<div class='col-md-6 col-xl-12 plr2 text-right'>";
                html += "<input class='form-control' name='accion' type='hidden' value='Crear' placeholder='' />";
                //html += "<button id='btnCrear' type='submit' class='btn btn-sm btnAgregar mt0 fit-content' data-toggle='tooltip' data-placement='top' title='Añadir vehiculo'> <i class='fas fa-plus'></i> Añadir vehiculo</button>";
                if (datoClaseVehi == "Industrial" || datoClaseVehi == "Autocaravana" || datoClaseVehi == "Tractor"  || datoClaseVehi == "Moto") {
                    html += "<button id='btnCrear' disabled type='submit' class='btn btn-sm btnAgregar mt0 fit-content' data-toggle='tooltip' data-placement='top' title='Añadir vehiculo'> <i class='fas fa-plus'></i> Añadir vehiculo</button>";
                } else {
                    html += "<button id='btnCrear'  type='submit' class='btn btn-sm btnAgregar mt0 fit-content' data-toggle='tooltip' data-placement='top' title='Añadir vehiculo'> <i class='fas fa-plus'></i> Añadir vehiculo</button>";
                }
    html += "</div>";
        html += "</div>";
    html += "</div>";
    

    document.getElementById("vehiculos").innerHTML = html;
    

}
function indusCaravaTractor() {
    var html = "";
    var datoClaseVehi = "";

    try {
        datoClaseVehi = document.getElementById("datoClaseVehiculo").value;
     
    } catch (error) {

    }

    document.getElementById("vehiculos").innerHTML = html;
    html +="<div id='vehiculo1' class='item-vehicules-contract '>";
        html +="<div class='row anti-row'>";
            html +="<div class='col-md-6 plr2'>";
                html +="<label>Marca</label>";
                    html +="<select id='marcaIndusCaravaTractor' name='marcaTurismoComercial' class='form-control' >";
                    html +="<option value='' disabled selected>Selecciona...</option>";
                    
                html += "</select>";
            html += "</div>";
            html +="<div class='col-md-6 plr2'>";
                html +="<label>Modelo</label>";
                html +="<input name='modeloTurismoComercial' class='form-control' type='text' placeholder=''/> ";
            html += "</div>";

        html += "</div>";
        //html += "</div>";
        html +="<div class='row anti-row mb-3'>";
            html +="<div class='col-md-3 plr2'>";
                html +="<label>Alto</label>";
                html +="<input name='alto' class='form-control' type='text' placeholder='(MM)' />";
            html += "</div>";
            html +="<div class='col-md-3 plr2'>";
                html += "<label>Largo</label>";
                html += "<input name='largo' class='form-control' type='text' placeholder='(MM)' />";
            html += "</div>";
            html +="<div class='col-md-3 plr2'>";
                html += "<label>Peso</label>";
                html += "<input name='peso' class='form-control type='text' placeholder='(KG)' />";
            html += "</div>";

            html +="<div class='col-md-3 plr2'>";
                html +="<label>Matrícula o bastidor</label>";
                html +="<input name='matriculaTurismosComercial' class='form-control' type='text' placeholder=''/> ";
            html += "</div>";
        html += "</div>";
        html += "<div class='row anti-row mb-3'>";

            html += "<div class='col-md-6 col-xl-12 plr2 text-right'>";
                html += "<input class='form-control' name='accion' type='hidden' value='Crear' placeholder='' />";
                if (datoClaseVehi == "Industrial" || datoClaseVehi == "Autocaravana" || datoClaseVehi == "Tractor" || datoClaseVehi == "Turismo-Comercial" || datoClaseVehi == "Moto") {
                    html += "<button id='btnCrear' disabled type='submit' class='btn btn-sm btnAgregar mt0 fit-content' data-toggle='tooltip' data-placement='top' title='Añadir vehiculo'> <i class='fas fa-plus'></i> Añadir vehiculo</button>";
                } else {
                    html += "<button id='btnCrear'  type='submit' class='btn btn-sm btnAgregar mt0 fit-content' data-toggle='tooltip' data-placement='top' title='Añadir vehiculo'> <i class='fas fa-plus'></i> Añadir vehiculo</button>";
                }
    
            html += "</div>";
        html += "</div>";
    html += "</div>";

    document.getElementById("vehiculos").innerHTML = html;
    //document.getElementById("btnAñadir").classList.add("invisible");
}

function activarCrear() {

    document.getElementById("btnCrear").setAttribute('disabled', '')
}
function moto() {
    var html = "";
    var datoClaseVehi = "";

    try {
        datoClaseVehi = document.getElementById("datoClaseVehiculo").value;

    } catch (error) {

    }
    document.getElementById("vehiculos").innerHTML = html;
    html += "<div id='vehiculo1'class='item-vehicules-contract '>";
        html += "<div class='row anti-row'>";
            
            html += "<div class='col-md-6 plr2'>";
                html += "<label>Marca</label>";
                html += "<select id='marcaMoto' name='marcaTurismoComercial' class='form-control' onchange='selectaModelo()'>";
                    html += "<option value='' disabled selected>Selecciona...</option>";
                   
                html += "</select>";
            html += "</div>";
            html += "<div class='col-md-6 plr2'>";
                html += "<label>Modelo</label>";
                html += "<select id='modeloMoto' name='modeloTurismoComercial' class='form-control' onchange='selectAniosMoto()'>";
                    html += "<option value='' disabled selected>Selecciona...</option>";
                    
            html += "</select>";
            html += "</div>";
        html += "</div>";
        html += "<div class='row anti-row mb-3'>";
            html += "<div class='col-md-4 plr2'>";
                html += "<label>Año</label>";
                 html += "<select id='anioMoto' name='aniosTurismoComercial' class='form-control' onchange='selectVersion()'>";
                    html += "<option value='' disabled selected>Selecciona...</option>";
                    
                html += "</select>";
            html += "</div>";
            html += "<div class='col-md-4 plr2'>";
                html += "<label>Versión</label>";
                html += "<select id='versionMoto' name='versionTurismosComercial' class='form-control' >";
                    html += "<option value='' disabled selected>Selecciona...</option>";
                    
                    html += "</select>";
            html += "</div>";
            html += "<div class='col-md - 4 plr2'>";
                html += "<label>Matrícula</label>";
                html += "<input class='form-control' name='matriculaTurismosComercial' type='text' placeholder='' />";
            html += "</div>";
        html += "</div>";
        html += "<div class='row anti-row mb-3'>";
   
            html += "<div class='col-md-6 col-xl-12 plr2 text-right'>";
                html += "<input class='form-control' name='accion' type='hidden' value='Crear' placeholder='' />";
                //html += "<button id='btnCrear' type='submit' class='btn btn-sm btnAgregar mt0 fit-content' data-toggle='tooltip' data-placement='top' title='Añadir vehiculo'> <i class='fas fa-plus'></i> Añadir vehiculo</button>";
                if (datoClaseVehi == "Industrial" || datoClaseVehi == "Autocaravana" || datoClaseVehi == "Tractor" || datoClaseVehi == "Turismo-Comercial" ) {
                    html += "<button id='btnCrear' disabled type='submit' class='btn btn-sm btnAgregar mt0 fit-content' data-toggle='tooltip' data-placement='top' title='Añadir vehiculo'> <i class='fas fa-plus'></i> Añadir vehiculo</button>";
                } else {
                    html += "<button id='btnCrear'  type='submit' class='btn btn-sm btnAgregar mt0 fit-content' data-toggle='tooltip' data-placement='top' title='Añadir vehiculo'> <i class='fas fa-plus'></i> Añadir vehiculo</button>";
                }
    html += "</div>";
        html += "</div>";
    html += "</div>";

    document.getElementById("vehiculos").innerHTML = html;

}
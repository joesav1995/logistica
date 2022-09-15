var token = "";
var servicio = "";

var lstVehiculo = "";
var precio = "";

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
       // apiDatosEnvio();
        //api("http://localhost:44359/api/servicio", "Servicio");
        api("http://localhost:44359/api/listavehiculos");
    });


function api(url) {
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
                    //html += "<option value='SELECCIONA'>SELECCIONA</option>";
                    console.log("vehiculo: " + resultado); 
                    resultado.forEach(function (element) {

                        llenamosVehiculos(element);

                        element.forEach(function (elementVehiculos) {
                           
                        
                            //console.log("vehiculo: " + element.claseVehiculo); 
                            console.log("vehiculo: " + elementVehiculos); 
                            fetch("http://localhost:44359/api/datosenvio", requestOptions2)
                        
                                .then(function (serverPromise2) {
                                    serverPromise2.json()
                                        .then(function (datos) {

                                            

                                            datos.forEach(function (elementDatos) {
                                                console.log(elementDatos);
                                                
                                                // llamamos api servicio
                                                fetch("http://localhost:44359/api/servicio", requestOptions2)
                                            
                                                    .then(function (serverPromise2) {
                                                        serverPromise2.json()
                                                            .then(function (servicio) {

                                                                llenamosDatosEnvio(datos, servicio);

                                                                servicio.forEach(function (elementServicio) {
                                                                    console.log(elementServicio);

                                                                    if (elementVehiculos.claseVehiculo == "Moto") {

                                                                    } else {
                                                                        var tildes = true;
                                                                        var urlp = "http://pruebas.transportauto.es:8083/api/calculos/tarifa/0%7C" + elementDatos.provinciaOrigen + "%7C" + elementDatos.provinciaDestino + "%7C1%7CVehiculo%7C1" ;
                                                                        
                                                                        if (urlp.indexOf("Á") >0) {
                                                                            urlp =urlp.replace("Á", "%C3%81");
                                                                        }
                                                                        if (urlp.indexOf("É") > 0) {
                                                                            urlp=urlp.replace("É", "%C3%89");
                                                                        }
                                                                        if (urlp.indexOf("Í") > 0) {
                                                                            urlp =urlp.replace("Í", "%C3%8D");
                                                                        }
                                                                        if (urlp.indexOf("Ó") > 0) {
                                                                            urlp =urlp.replace("Ó", "%C3%93");
                                                                        }
                                                                        if (urlp.indexOf("Ú") > 0) {
                                                                            urlp =urlp.replace("Ú", "%C3%9A");
                                                                        }
                                                                        /*urlp.in
                                                                        while (tildes!=false) {
                                                                            urlp.indexOf()
                                                                        }*/
                                                                        console.log(urlp);
                                                                        api2(urlp, elementServicio.TipoEnvio);
                                                                    }
                                                                    
                                                                
                                                                })

                                                            })
                                                            .catch(function (e2) {
                                                                console.log(e2);
                                                            });
                                                    })

                                            })

                                        })
                                        .catch(function (e2) {
                                            console.log(e2);
                                        });
                                })
                        })
                    })
                    /*datosEnvio.forEach(function (element3) {
                        console.log("fuera"+element3);
                        //html += "<option value='" + element + "'>" + element + "</option>";

                    })*/
                    
                   
                    

                })
                .catch(function (e2) {
                    console.log(e2);
                });
        })

}
function llenamosVehiculos(element) {
    
    var htmlFilas = "";
    element.forEach(function (elementVehiculos) {
        elementVehiculos.claseVehiculo
       
        switch (elementVehiculos.claseVehiculo) {
            case "Turismo-Comercial":
                document.getElementById("moto").classList.add("invisible");
                document.getElementById("otrosVehiculos").classList.add("invisible")
                document.getElementById("turismoComercial").classList.remove("invisible")

                htmlFilas += "<tr>";
                    htmlFilas += "<td>" + elementVehiculos.id + "</td>";
                    htmlFilas += "<td>" + elementVehiculos.tipoVehiculo + "</td>";
                    htmlFilas += "<td>" + elementVehiculos.marcaTurismoComercial + "</td>";
                    htmlFilas += "<td>" + elementVehiculos.modeloTurismoComercial + "</td>";
                    htmlFilas += "<td>" + elementVehiculos.aniosTurismoComercial + "</td>";
                    htmlFilas += "<td>" + elementVehiculos.versionTurismosComercial + "</td>";
                    htmlFilas += "<td>" + elementVehiculos.matriculaTurismosComercial + "</td>";
                htmlFilas += "</tr>";
                break
            case "Industrial":
                document.getElementById("moto").classList.add("invisible");
                document.getElementById("turismoComercial").classList.add("invisible")
                document.getElementById("otrosVehiculos").classList.remove("invisible")
                break
            case "Autocaravana":
                document.getElementById("moto").classList.add("invisible");
                document.getElementById("turismoComercial").classList.add("invisible")
                document.getElementById("otrosVehiculos").classList.remove("invisible")
                break
            case "Tractor":
                document.getElementById("moto").classList.add("invisible");
                document.getElementById("turismoComercial").classList.add("invisible")
                document.getElementById("otrosVehiculos").classList.remove("invisible")
                break
            case "Moto":
                document.getElementById("otrosVehiculos").classList.add("invisible");
                document.getElementById("turismoComercial").classList.add("invisible")
                document.getElementById("moto").classList.remove("invisible")
                break
        }

    })

    /*document.getElementById("codigo_postal").classList.add("invisible");
    document.getElementById("direccion").classList.remove("col-md-8")*/
    document.getElementById("filas").innerHTML = htmlFilas;
}
function llenamosDatosEnvio(datos, servicio) {
    var html = "";
    datos.forEach(function (elementDatos) {
        console.log("dentro de la funcion " + elementDatos.provinciaOrigen);

        

        html += "<div class='col-lg-4 mt-20-mv'>";
            html += "<div class='box-simple-line h-100'>";
                html += "<b class='blue-color-bold'>DATOS DE DESTINO</b>";
                html += "<p class='mt10'><i class='fas fa-map-marked - alt'></i> " + elementDatos.tipoOrigen + "</p>";
                html += "<p><i class='fas fa-building'></i> " + elementDatos.razonSocialOrigen + "</p>";
                html += "<p><i class='fas fa-user'></i> " + elementDatos.personaContactoOrigen + "</p>";
                html += "<p><i class='fas fa-phone'></i> " + elementDatos.telefonoOrigen + "</p>";
                html += "<p><i class='fas fa-map-marker-alt'></i> " + elementDatos.direccionOrigen + ", " + elementDatos.CPOrigen + " " + elementDatos.localdadOrigen + ", " + elementDatos.provinciaOrigen + "</p>";
                if (elementDatos.observacionesOrigen == "") {
                    html += "<p><i class='far fa-comment'></i> No hay observaciones</p>";
                } else {
                    html += "<p><i class='far fa-comment'></i> " + elementDatos.observacionesOrigen + "</p>";
                }

            html += "</div>";
        html += "</div>";


        html += "<div class='col-lg-4 mt-20-mv'>";
            html += "<div class='box-simple-line h-100'>";
                html += "<b class='blue-color-bold'>DATOS DE ORIGEN</b>";
                html += "<p class='mt10'><i class='fas fa-map-marked - alt'></i> " + elementDatos.tipoDestino + "</p>";
                html += "<p><i class='fas fa-building'></i> " + elementDatos.razonSocialDestino + "</p>";
                html += "<p><i class='fas fa-user'></i> " + elementDatos.personaContactoDestino + "</p>";
                html += "<p><i class='fas fa-phone'></i> " + elementDatos.telefonoDestino + "</p>";
                html += "<p><i class='fas fa-map-marker-alt'></i> " + elementDatos.direccionDestino + ", " + elementDatos.CPDestino + " " + elementDatos.localdadDestino + ", " + elementDatos.provinciaDestino + "</p>";
                if (elementDatos.observacionesDestino == "") {
                    html += "<p><i class='far fa-comment'></i> No hay observaciones</p>";
                } else {
                    html += "<p><i class='far fa-comment'></i> " + elementDatos.observacionesDestino + "</p>";
                }

            html += "</div>";
        html += "</div>";
    })
    var anio = "";
    var mes = "";
    var dia = "";
    var permiso = "";
    var estado = "";
    var tipoEnvio = "";

    servicio.forEach(function (elementDatos) {
        fecha = elementDatos.fecha;
       // fechaSinH=fechaSinH.su
        anio = fecha.substr(0, 4);
        
        mes = fecha.substr(5, 2);
  
        dia = fecha.substr(8,2);
        
        estado = elementDatos.estado;
        
        if (elementDatos.TipoEnvio=="Normal") {
            tipoEnvio = "BÁSICO 5 días de recogida";
        }
        if (elementDatos.TipoEnvio == "Express") {
            tipoEnvio = "EXPRESS 3 días de recogida";
        }
        if (elementDatos.autorizacion == "on") {
            permiso = "Si";
        } else {
            permiso = "No";
        }

        html += "<div class='col-lg-4 mt-20-mv'>";
            html += "<div class='box-simple-line h-100'>";
                html += "<div class='title-step4-mv'>";
                    html += "<b class='blue-color-bold'>FECHA DISPONIBILIDAD</b>";
                    html += "<p> <i class='fas fa-calendar-check'></i> "+dia+"/"+mes+"/"+anio+"</p>";
                html += "</div>";
                html += "<div class='title-step4-mv mt20'>";
                    html += "<b class='blue-color-bold '>TIPO DE ENVÍO</b>";
                    html += "<p><i class='fas fa-shipping-fast'></i> "+tipoEnvio+"</p>";
                html += "</div>";
                html += "<div class='title-step4-mv mt20'>";
                    html += "<b class='blue-color-bold '>ESTADO DEL VEHÍCULO</b>";
                    html += "<p><i class='fas fa-car-alt'></i> " + estado.toUpperCase()+"</p>";
                html += "</div>";
                html += "<div class='title-step4-mv mt20'>";
                    html += "<b class='blue-color-bold '>¿ES NECESARIA AUTORIZACIÓN?</b>";
                    html += "<p><i class='fas fa-car-alt'></i> " + permiso + "</p>";
                html += "</div>";
            html += "</div>";
        html += "</div>";

    })
    document.getElementById("datoEnvio").innerHTML = html;
}
function api2(url, tipo) {
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
                    //html += "<option value='SELECCIONA'>SELECCIONA</option>";
                    switch (tipo) {

                        case "Normal":
                            resultado.forEach(function (element) {
                                console.log(element);
                                //html += "<option value='" + element + "'>" + element + "</option>";
                                document.getElementById("precioSinIva").innerHTML = element.precioAncove;
                                document.getElementById("ubicacionOrigen").innerHTML = element.origen +", ESPAÑA";
                                document.getElementById("ubicacionDestino").innerHTML = element.destino + ", ESPAÑA";
                            })
                            //document.getElementById("marcaTurismoComercial").innerHTML = html;
                            break;
                        case "Express":
                             resultado.forEach(function (element) {
                                 //console.log(element);
                                 document.getElementById("precioSinIva").innerHTML = element.precioExpress;
                                 document.getElementById("ubicacionOrigen").innerHTML = element.origen + ", ESPAÑA";
                                 document.getElementById("ubicacionDestino").innerHTML = element.destino + ", ESPAÑA";
 
                             })
                            
 
                            break;
                        
                        /* case "Modelo":
                             console.log(resultado);
                             resultado.forEach(function (element) {
                                 //console.log(element);
                                 html += "<option value='" + element + "'>" + element + "</option>";
 
                             })
                             document.getElementById("modeloTurismoComercial").innerHTML = html;
 
                             break;*/

                    }

                })
                .catch(function (e2) {
                    console.log(e2);
                });
        })

}
function apiDatosEnvio() {
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

    fetch("http://localhost:44359/api/datosenvio", requestOptions2)
        //fetch("http://apitra.transportauto.es/api/Agenda/" + id, requestOptions2)
        .then(function (serverPromise2) {
            serverPromise2.json()
                .then(function (resultado) {
                    //console.log("agenda: " + agenda); 
                    //html += "<option value='SELECCIONA'>SELECCIONA</option>";
                    resultado.forEach(function (element) {
                        //console.log(element);
                        //html += "<option value='" + element + "'>" + element + "</option>";

                    })

                })
                .catch(function (e2) {
                    console.log(e2);
                });
        })

}
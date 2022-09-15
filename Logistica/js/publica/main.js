$(document).ready(function(){

    /********************************************************/
    /* ********************** INICIALIZAR SELECT 2 MULTIPLE CHOOSEN*************/
    /*************************************************************/

    if ( $( ".select2" ).length ) {


        $('.select2').select2(
            {
                placeholder: "Selecciona...",

            }
        );

    }

    //****************************************************************//
    // OJO!!! ESO SOLO SON SIMULACIÓN PARA MAQUETACIÓN QUE TU YA LO HACES A TU FORMA!!  CALCULADORA HOME añadir items de vehículos AUTOMOVILES/COMERCIALES
    //******************************************************************//

    $(".btn-add-vehiculos").click(function(){

        $(this).closest('.list-vehicules-calculator').append(

        "<div class='item-vehicule'><hr class='white-hr'>"+
            "       <div class='row white-color-bold animate slideInDown delay-2s'>" +
            "             <div class='col-md-2 p-col-calculator'>" +
            "                 Tipo" +
            "                   <select  class='form-control'>" +
                "                    <option value='' disabled selected>Selecciona...</option>" +
                "                    <option value='vehiculo'>Vehículo</option>" +
                "                    <option value='turismo'>Turismo</option>" +
            "                  </select>" +
            "             </div>" +
            "             <div class='col-md-2 p-col-calculator' >" +
            "                  Marca" +
            "                   <select  class='form-control'>" +
            "                       <option value='' disabled selected>Selecciona...</option>" +
            "                       <option value='marca1'>Marca 1</option>" +
            "                       <option value='marca2'>Marca 2</option>" +
            "                       <option value='marca3'>Marca 3</option>" +
            "                  </select>" +
            "             </div>" +
            "             <div class='col-md-3 p-col-calculator'>" +
            "                  Modelo" +
            "                   <select  class='form-control'>" +
            "                       <option value='' disabled selected>Selecciona...</option>" +
            "                       <option value='modelo1'>Modelo 1</option>" +
            "                       <option value='modelo2'>Modelo 2</option>" +
            "                       <option value='modelo3'>Modelo 3</option>" +
            "                  </select>" +
            "             </div>" +
            "             <div class='col-md-1 p-col-calculator'>" +
            "                  Año" +
            "                   <select  class='form-control'>" +
            "                       <option value='' disabled selected>Año</option>" +
            "                       <option value='2000'>2000</option>" +
            "                       <option value='2001'>2001</option>" +
            "                       <option value='2002'>2002</option>" +
            "                  </select>" +
            "             </div>" +
            "             <div class='col-md-3 p-col-calculator'>" +
            "                  Versión" +
            "                   <select  class='form-control'>" +
            "                       <option value='' disabled selected>Año</option>" +
            "                       <option value='version1'>Versión 1</option>" +
            "                       <option value='version2'>Versión 2</option>" +
            "                       <option value='version3'>Versión 3</option>" +
            "                  </select>" +
            "             </div>" +
            "             <div class='col-md-1'>" +
            "                <button class='btn btn-sm btn-delete-item' data-toggle='tooltip' data-placement='top' title='eliminar elemento'><i class='fas fa-times'></i></button>" +
            "             </div>" +
            "      </div></div> ");
    });


    //****************************************************************//
    // SIMULACIÓN PARA MAQUETACIÓN!!!  CALCULADORA HOME items de vehículos INDUSTRIALES, AUTOCARAVANAS, TRACTOR
    //****************************************************************//

    $(".btn-add-indust-autocarav-tractor").click(function(){

        $(this).closest('.list-vehicules-calculator').append(

            "<div class='item-vehicule'><hr class='white-hr'> "+
            "       <div class='row  white-color-bold animate slideInDown delay-2s'>" +
            "             <div class='col-md-3 p-col-calculator'>" +
            "                 Marca" +
            "                   <select  class='form-control'>" +
            "                       <option value='' disabled selected>Selecciona...</option>" +
            "                       <option value='marca1'>Marca 1</option>" +
            "                       <option value='marca2'>Marca 2</option>" +
            "                       <option value='marca3'>Marca 3</option>" +
            "                  </select>" +
            "             </div>" +
            "             <div class='col-md-3 p-col-calculator'>" +
            "                  Modelo" +
            "                   <select  class='form-control'>" +
            "                       <option value='' disabled selected>Selecciona...</option>" +
            "                       <option value='modelo1'>Modelo 1</option>" +
            "                       <option value='modelo2'>Modelo 2</option>" +
            "                       <option value='modelo3'>Modelo 3</option>" +
            "                  </select>" +
            "             </div>" +
            "             <div class='col-md-2 p-col-calculator'>" +
            "                  Largo" +
            "                  <input type='text p-col-calculator' placeholder='mm' class='form-control'/>" +
            "             </div>" +
            "             <div class='col-md-2 p-col-calculator'>" +
            "                  Alto" +
            "                  <input type='text' class='form-control' placeholder='mm' />" +
            "             </div>" +
            "             <div class='col-md-1 p-col-calculator'>" +
            "                  Peso" +
            "                  <input type='text' class='form-control' placeholder='kg'/>" +
            "             </div>" +
            "             <div class='col-md-1'>" +
            "                <button class='btn btn-sm btn-delete-item' data-toggle='tooltip' data-placement='top' title='eliminar elemento'><i class='fas fa-times'></i></button>" +
            "             </div>" +
            "      </div></div>");
    });

    //****************************************************************//
    // SIMULACIÓN PARA MAQUETACIÓN!!! CALCULADORA HOME  añadir items de vehículos MOTOS
    //****************************************************************//
    $(".btn-add-moto").click(function(){

        $(this).closest('.list-vehicules-calculator').append(

            "<div class='item-vehicule'><hr class='white-hr'> "+
            "       <div class='row white-color-bold  animate slideInDown delay-2s'>" +
            "             <div class='col-md-3 p-col-calculator'>" +
            "                 Marca" +
            "                   <select  class='form-control'>" +
            "                       <option value='' disabled selected>Selecciona...</option>" +
            "                       <option value='marca1'>Marca 1</option>" +
            "                       <option value='marca2'>Marca 2</option>" +
            "                       <option value='marca3'>Marca 3</option>" +
            "                  </select>" +
            "             </div>" +
            "             <div class='col-md-3 p-col-calculator'>" +
            "                  Modelo" +
            "                   <select  class='form-control'>" +
            "                       <option value='' disabled selected>Selecciona...</option>" +
            "                       <option value='modelo1'>Modelo 1</option>" +
            "                       <option value='modelo2'>Modelo 2</option>" +
            "                       <option value='modelo3'>Modelo 3</option>" +
            "                  </select>" +
            "             </div>" +
            "             <div class='col-md-2 p-col-calculator'>" +
            "                  C.C" +
            "                  <input type='text' class='form-control' placeholder='C.C'/>" +
            "             </div>" +
            "             <div class='col-md-2 p-col-calculator'>" +
            "                  CV" +
            "                  <input type='text' class='form-control' placeholder='CV'/>" +
            "             </div>" +
            "             <div class='col-md-1 p-col-calculator'>" +
            "                  Peso" +
            "                  <input type='text' class='form-control' placeholder='Kg'/>" +
            "             </div>" +
            "             <div class='col-md-1'>" +
            "                <button class='btn btn-sm btn-delete-item' data-toggle='tooltip' data-placement='top' title='eliminar elemento'><i class='fas fa-times'></i></button>" +
            "             </div>" +
            "      </div></div>");
    });


    //****************************************************************//
    // SIMULACIÓN PARA MAQUETACIÓN  ELIMINAR ITEM DE CALCULADORA
    //******************************************************************//
    $("body").on("click",".btn-delete-item",function(){
        $(this).tooltip('hide');
        $(this).closest('.item-vehicule').remove();

    });



    /*----------------------------------------------------*/
    /*	MOSTRAR PRIMER ITEM DE VEHÍCULO EN FUNCIÓN DEL SELECCIONADO EN SELECTOR TIPO EN CALCULADORA HOME VESIÓN MOVIL. aqui a cascoporro muestro turismo, no lo cojo de selector ni nada.
    Una vez selecciono un tipo de vehículo me aparece el primier item de formulario correspondiente
     */
     /*----------------------------------------------------*/

    $("#select-tipo-mv").change(function() {

        //en funcion del tipo de vehiculo se muestra una u otra caja. yo no cojo valor ninguno del selector, muestro a cascoporro el tipo vehiulo.

            $(".types-forms").removeClass("d-none");
            $(".types-forms").removeClass("animated fadeOutUp");
            $(".types-forms").addClass("animated fadeInDown");


    });


    //****************************************************************//
    // SIMULACIÓN PARA MAQUETACIÓN AÑADIR ITEM CALCULADORA VERSIÓN MÓVIL DE LA HOME
    //******************************************************************//

    $(".btn-add-vehiculos-home-mv").click(function(){

        $(this).closest('.list-vehicules-calculator').append(

            " <div class='item-vehicule'><hr class='white-hr'>"+
            "       <div class='row white-color-bold animate slideInDown delay-2s'>" +
            "             <div class='col-lg-3 p-col-calculator'>" +
            "                  Marca" +
            "                   <select  class='form-control'>" +
            "                       <option value='' disabled selected>Selecciona...</option>" +
            "                       <option value='marca1'>Marca 1</option>" +
            "                       <option value='marca2'>Marca 2</option>" +
            "                       <option value='marca3'>Marca 3</option>" +
            "                  </select>" +
            "             </div>" +
            "             <div class='col-lg-4 p-col-calculator'>" +
            "                  Modelo" +
            "                   <select  class='form-control'>" +
            "                       <option value='' disabled selected>Selecciona...</option>" +
            "                       <option value='modelo1'>Modelo 1</option>" +
            "                       <option value='modelo2'>Modelo 2</option>" +
            "                       <option value='modelo3'>Modelo 3</option>" +
            "                  </select>" +
            "             </div>" +
            "             <div class='col-lg-1 p-col-calculator'>" +
            "                  Año" +
            "                   <select  class='form-control'>" +
            "                       <option value='' disabled selected>Año</option>" +
            "                       <option value='2000'>2000</option>" +
            "                       <option value='2001'>2001</option>" +
            "                       <option value='2002'>2002</option>" +
            "                  </select>" +
            "             </div>" +
            "             <div class='col-lg-3 p-col-calculator'>" +
            "                  Versión" +
            "                   <select  class='form-control'>" +
            "                       <option value='' disabled selected>Año</option>" +
            "                       <option value='version1'>Versión 1</option>" +
            "                       <option value='version2'>Versión 2</option>" +
            "                       <option value='version3'>Versión 3</option>" +
            "                  </select>" +
            "             </div>" +
            "             <div class='col-lg-1 p-col-calculator'>" +
            "                <button class='btn btn-sm btn-delete-item' data-toggle='tooltip' data-placement='top' title='eliminar elemento'><i class='fas fa-times'></i> Eliminar vehículo </button>" +
            "             </div>" +
            "      </div></div>");
    });



    //****************************************************************//
    // SIMULACIÓN PARA MAQUETACIÓN AÑADIR ITEM CALCULADORA COLLAPSE!!!  SOLO SIMULO COMO SI ELIGIESEMOS TURISMO. ESTÁN MAQUETADOS DE EJEMPLO EN EL HTML OCULTOS UNA CAJA DE CADA TIPO.
    //******************************************************************//

    $(".btn-add-vehiculos-collapse").click(function(){

        $(this).closest('.list-vehicules-calculator').append(

            " <div class='item-vehicule'><hr class='white-hr'>"+
            "       <div class='row white-color-bold animate slideInDown delay-2s'>" +
            "             <div class='col-md-3 p-col-calculator'>" +
            "                  Marca" +
            "                   <select  class='form-control'>" +
            "                       <option value='' disabled selected>Selecciona...</option>" +
            "                       <option value='marca1'>Marca 1</option>" +
            "                       <option value='marca2'>Marca 2</option>" +
            "                       <option value='marca3'>Marca 3</option>" +
            "                  </select>" +
            "             </div>" +
            "             <div class='col-md-4 p-col-calculator'>" +
            "                  Modelo" +
            "                   <select  class='form-control'>" +
            "                       <option value='' disabled selected>Selecciona...</option>" +
            "                       <option value='modelo1'>Modelo 1</option>" +
            "                       <option value='modelo2'>Modelo 2</option>" +
            "                       <option value='modelo3'>Modelo 3</option>" +
            "                  </select>" +
            "             </div>" +
            "             <div class='col-md-1 p-col-calculator'>" +
            "                  Año" +
            "                   <select  class='form-control'>" +
            "                       <option value='' disabled selected>Año</option>" +
            "                       <option value='2000'>2000</option>" +
            "                       <option value='2001'>2001</option>" +
            "                       <option value='2002'>2002</option>" +
            "                  </select>" +
            "             </div>" +
            "             <div class='col-md-3 p-col-calculator'>" +
            "                  Versión" +
            "                   <select  class='form-control'>" +
            "                       <option value='' disabled selected>Año</option>" +
            "                       <option value='version1'>Versión 1</option>" +
            "                       <option value='version2'>Versión 2</option>" +
            "                       <option value='version3'>Versión 3</option>" +
            "                  </select>" +
            "             </div>" +
            "             <div class='col-md-1'>" +
            "                <button class='btn btn-sm btn-delete-item' data-toggle='tooltip' data-placement='top' title='eliminar elemento'><i class='fas fa-times'></i></button>" +
            "             </div>" +
            "      </div></div>");
    });


    /*
     SIMULACIÓN DE LAS DIFERENCIAS EN CALCULADORA EN FUNCIÓN DEL ESTADO DEL VEHÍCULO ( LA CALCULADORA PUEDE O NO DAR UN PRESUPUESTO)
    */
    $(".select-state-vehicule").change(function() {
        if( $(this).val() == "arranca" ){
            $('#btn-calculate-price').html("Calcular el precio del transporte <i class='fas fa-chevron-right'></i>");
            /*sacará presupuesto normal así no hacemos nada y se va a las tres cajas con precios*/
            $('.campos_solicitar_presupuesto').empty();
        }
        if( $(this).val() == "no_arranca" ){

            $('.campos_solicitar_presupuesto').empty();

            /*1. muestro campos email, telefono y observaciones para ponernos en contacto con ellos*/
            $('.campos_solicitar_presupuesto').append(
                "       <div class='row '>" +
                "             <div class='col-md-4 white-color-bold p-col-calculator'>" +
                "                 Email" +
                "                   <input  class='form-control' type='text' placeholder='Completa...'/>" +
                "             </div>" +
                "             <div class='col-md-4 white-color-bold p-col-calculator' >" +
                "                  Teléfono" +
                "                   <input  class='form-control' type='text' placeholder='Completa...'/>" +
                "             </div>" +
                "             <div class='col-md-4 white-color-bold'>" +
                "                  Observaciones" +
                "                   <input  class='form-control' type='text' placeholder='Completa...'/>" +
                "             </div></div>"
            );
            /*2. cambio el texto del botón de calcular precio de transporte por solicitar precio de transporte*/
            $('#btn-calculate-price').html("Solicitar precio del transporte <i class='fas fa-chevron-right'></i>");
        }
        if( $(this).val() == "siniestro" ){
            $('.campos_solicitar_presupuesto').empty();
            /*1. muestro campos email, telefono y observaciones para ponernos en contacto con ellos*/
            $('.campos_solicitar_presupuesto').append(
                "       <div class='row '>" +
                "             <div class='col-md-4 white-color-bold p-col-calculator'>" +
                "                 Email" +
                "                   <input  class='form-control' type='text' placeholder='Completa...'/>" +
                "             </div>" +
                "             <div class='col-md-4 white-color-bold p-col-calculator' >" +
                "                  Teléfono" +
                "                   <input  class='form-control' type='text' placeholder='Completa...'/>" +
                "             </div>" +
                "             <div class='col-md-4 white-color-bold'>" +
                "                  Observaciones" +
                "                   <input  class='form-control' type='text' placeholder='Completa...'/>" +
                "             </div></div>"
            );
            /*2. cambio el texto del botón de calcular precio de transporte por solicitar precio de transporte*/
            $('#btn-calculate-price').html("Solicitar precio del transporte <i class='fas fa-chevron-right'></i>");
        }
    });


});


//****************************************************************//
// DE AQUÍ PARA ABAJO YA SON ANIMACIONES Y DEMÁS QUE PUEDES MODIFICAR A TU ANTOJO...
//******************************************************************//

//****************************//
//*** INICIALIZAR TOOLTIPS****//
//****************************//

// para que funcione cuando  los pinto por javascript
$(function(){
    $('body').tooltip({
        selector: '[data-toggle="tooltip"]'
    });

});


$(document).ready(function(){

    if ( $( ".datepickers_custom" ).length ) {

        /*--------------JQUERY DATETIMEPICKERS--------------------------------------*/

        jQuery.datetimepicker.setLocale('es');

        $('.datepickers_custom').datetimepicker(
            {
                timepicker:false,
                format:'d/m/Y',
                dayOfWeekStart: 1,
                i18n:
                    {
                        de:
                            {
                                months:
                                    [
                                        'Enero','Febrero','Marzo','Abril',
                                        'Mayo','Junio','Julio','Agosto',
                                        'Septiembre','Octubre','Noviembre','Diciembre',
                                    ],
                                dayOfWeek:
                                    [
                                        "Lu", "Ma", "Mie", "Ju",
                                        "Vi", "Sa", "Do.",
                                    ]
                            }
                    },
            });
    }


    /**********************************************************************************************************************************************/
    // /************ PAGINA INICIAR/REGISTRO Y PASO 3 DE COTRATACIÓN********************ANIMACIÓN para desplegar el formulario de registro DE MANERA QUE OCUPE TODO  de empresa o de particular en función de lo elegido en el select corrrespondiente**********************************/
    /**********************************************************************************************************************************************/

    $("#select_type_register_ppal").change(function() {

        if( $(this).val() == "register_particular" ){

            /*elimino posibles clases añadidas*/
            $("#form-register-empresa").addClass("d-none");
            $("#form-register-empresa").removeClass("animated fadeIn");

            /*oculto columan iniciar sesión y pongo a pantalla completa el registro*/
            $("#row-iniciar-sesion #col-iniciar").addClass("animated fadeOut");

            setTimeout(function(){
                $("#row-iniciar-sesion #col-iniciar").removeClass("col-lg-6");
                $("#row-iniciar-sesion #col-iniciar").addClass("d-none");

                $("#row-iniciar-sesion #col-register").removeClass("col-lg-6");
                $("#row-iniciar-sesion #col-register").removeClass("border-left-dotted");

                $("#row-iniciar-sesion #col-register").addClass("animated slideInRight col-lg-12");

                //visualizo el botón para volver a posición anterior
                $("#close-register-div").removeClass("d-none");
                //muestro formulario registro particular
                $("#form-register-particular").removeClass("d-none");
                $("#form-register-particular").addClass("animated fadeIn");
            }, 400);

        }

        if( $(this).val() == "register_empresa" ){
            /*elimino posibles clases añadidas*/
            $("#form-register-particular").addClass("d-none");
            $("#form-register-particular").removeClass("animated fadeIn");

            /*muestrocoluman iniciar sesión y pongo a pantalla completa el registro*/
            $("#row-iniciar-sesion #col-iniciar").addClass("animated fadeOut");

            setTimeout(function(){
                $("#row-iniciar-sesion #col-iniciar").removeClass("col-lg-6");
                $("#row-iniciar-sesion #col-iniciar").addClass("d-none");

                $("#row-iniciar-sesion #col-register").removeClass("col-lg-6");
                $("#row-iniciar-sesion #col-register").removeClass("border-left-dotted");

                $("#row-iniciar-sesion #col-register").addClass("animated slideInRight col-lg-12");
                //visualizo el botón para volver a posición anterior
                $("#close-register-div").removeClass("d-none");
                //muestro formulario registro particular
                $("#form-register-empresa").removeClass("d-none");
                $("#form-register-empresa").addClass("animated fadeIn");
            }, 400);

        }

    });

    $("#close-register-btn").click(function() {

        //oculto el botón para volver a posición anterior
        $("#close-register-div").addClass("d-none");

        //vuelvo a esconder formularios desplegados
        $("#form-register-particular").addClass("d-none");
        $("#form-register-empresa").addClass("d-none");

        //reincio el select de perfil para que aparezca el placeholder
        $('#select_type_register_ppal').prop('selectedIndex',0);

        setTimeout(function(){
            $("#row-iniciar-sesion #col-register").removeClass("animated slideInRight col-lg-12");
            /*muestro columan iniciar sesión y pongo a dos columnas*/
            $("#row-iniciar-sesion #col-iniciar").removeClass("d-none animated fadeOut");
            $("#row-iniciar-sesion #col-iniciar").addClass("col-lg-6 animated fadeIn");
            $("#row-iniciar-sesion #col-register").addClass("border-left-dotted");

            $("#row-iniciar-sesion #col-register").removeClass("col-lg-12");
            $("#row-iniciar-sesion #col-register").addClass("col-lg-6 animated slideInLeft");
        }, 400);
    });




    /*----------------------------------------------------*/
    /*	MOVIMIENTO CAJA DE FILTROS CALCULADORA INTEGRADA EN MENÚ PRINCIPAL PARA PAGINAS DISTINTAS DE HOME
     /*----------------------------------------------------*/
    $state_btn_calculator=false;
    var clickCount = 0;
    $(".btn-control-box-calculator").click(function() {
        if(clickCount%2==0){
            //do when open filter
            $(".btn-control-box-calculator" ).html( "cerrar <i class='fas fa-chevron-up'></i>" );
            $(".calculator-box").removeClass("d-none");
            $(".calculator-box").removeClass("animated fadeOutUp");
            $(".calculator-box").addClass("animated fadeInDown");
        }else{
            //do when close filter
            $( ".btn-control-box-calculator" ).html( " calcular  <i class='fas fa-chevron-down'></i>" );
            $(".calculator-box").removeClass("animated fadeInDown");
            $(".calculator-box").addClass("animated fadeOutUp");
            setTimeout(function(){
                $(".calculator-box").addClass("d-none");
            }, 600);
        }
        clickCount++;
    });

});

/**************************************************************************************/
//******** FAQS****************************************************************
/**************************************************************************************/

//Para que solo se abra una respuesta. cuando desplegamos un collapse se oculta el que esté abierto

$(document).ready(function() {
    var $myGroup = $('#preguntas-pc');
    $myGroup.on('show.bs.collapse','.collapse', function() {
        $myGroup.find('.collapse.show').collapse('hide');
    });

});

//--------------------------------------------------------COOKIES-------------------------------------------------------------------//

if ( $( "#barraaceptacion" ).length ) {
    function getCookie(c_name) {
        var c_value = document.cookie;
        var c_start = c_value.indexOf(" " + c_name + "=");
        if (c_start == -1) {
            c_start = c_value.indexOf(c_name + "=");
        }
        if (c_start == -1) {
            c_value = null;
        } else {
            c_start = c_value.indexOf("=", c_start) + 1;
            var c_end = c_value.indexOf(";", c_start);
            if (c_end == -1) {
                c_end = c_value.length;
            }
            c_value = unescape(c_value.substring(c_start, c_end));
        }
        return c_value;
    }

    function setCookie(c_name, value, exdays) {
        var exdate = new Date();
        exdate.setDate(exdate.getDate() + exdays);
        var c_value = escape(value) + ((exdays == null) ? "" : "; expires=" + exdate.toUTCString());
        document.cookie = c_name + "=" + c_value;
    }

    if (getCookie('transportauto') != "1") {
        document.getElementById("barraaceptacion").style.display = "block";
    }

    function PonerCookie() {
        setCookie('transportauto', '1', 365);
        document.getElementById("barraaceptacion").style.display = "none";
    }

};
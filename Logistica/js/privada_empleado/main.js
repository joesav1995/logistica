

$(document).ready(function() {

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
    /********************************************************/
    /* ********************** INICIALIZAR SELECT 2*************/
    /*************************************************************/

   /* if ( $( "select .form-control" ).length ) {


        $('select .form-control').select2(
            {
                placeholder: "Selección múltiple"
            }
        );

    }
*/
    $('.js-example-basic-single').select2();
    /*************************************************************/
//    DATATABLES CON BOTONES DE EXPORTAR DOCUMENTOS
// /*******************************************/
    if ( $( ".datatable-transportauto-buttons" ).length ) {

        $('.datatable-transportauto-buttons').DataTable( {
            responsive: true,
            dom: 'Bfrtip',
            buttons: [
                'csv', 'excel', 'pdf'
            ],

            "language": {
                "lengthMenu": "Mostrar _MENU_ elementos por página",
                "zeroRecords": "No hay resultados para esa búsqueda, lo sentimos",
                "info": "Mostrando página _PAGE_ de _PAGES_",
                "infoEmpty": "No hay resultados disponibles",
                "infoFiltered": "(filtrado de _MAX_ elementos totales)",
                "decimal":        "",
                "emptyTable":     "No hay datos que mostrar",
                "infoPostFix":    "",
                "thousands":      ",",
                "loadingRecords": "Cargando...",
                "processing":     "Procesando...",
                "search":         "Buscar:",
                "paginate": {
                    "first":      "Primero",
                    "last":       "Último",
                    "next":       "Siguiente",
                    "previous":   "Anterior"
                },
                "aria": {
                    "sortAscending":  ": activar para ordenar la columna ascendente",
                    "sortDescending": ": activar para ordenar la columna descendente"
                }
            }

        } );

    }

    /*************************************************************/
//    DATATABLES SIN BOTONES Y SIN PAGINACIÓN, PARA USAR EN TABLA TARIFA COEFICIENTE
// /*******************************************/

    if ( $( ".datatable-transportauto-pagin-false" ).length ) {

        $('.datatable-transportauto-pagin-false').DataTable( {
            responsive: true,
            paging:false,
            searching: false,

            "language": {
                "lengthMenu": "Mostrar _MENU_ elementos por página",
                "zeroRecords": "No hay resultados para esa búsqueda, lo sentimos",
                "info": "Mostrando página _PAGE_ de _PAGES_",
                "infoEmpty": "No hay resultados disponibles",
                "infoFiltered": "(filtrado de _MAX_ elementos totales)",
                "decimal":        "",
                "emptyTable":     "No hay datos que mostrar",
                "infoPostFix":    "",
                "thousands":      ",",
                "loadingRecords": "Cargando...",
                "processing":     "Procesando...",
                "search":         "Buscar:",
                "paginate": {
                    "first":      "Primero",
                    "last":       "Último",
                    "next":       "Siguiente",
                    "previous":   "Anterior"
                },
                "aria": {
                    "sortAscending":  ": activar para ordenar la columna ascendente",
                    "sortDescending": ": activar para ordenar la columna descendente"
                }
            }

        } );

    }


    /*************************************************************/
//    DATATABLES CON BOTONES DE EXPORTAR DOCUMENTOS y sin responsive, con scroll para las pujas
// /*******************************************/
    if ( $( ".datatable-transportauto-buttons-scroll" ).length ) {

        $('.datatable-transportauto-buttons-scroll').DataTable( {
            scrollX:true,
            dom: 'Bfrtip',
            buttons: [
                'csv', 'excel', 'pdf'
            ],

            "language": {
                "lengthMenu": "Mostrar _MENU_ elementos por página",
                "zeroRecords": "No hay resultados para esa búsqueda, lo sentimos",
                "info": "Mostrando página _PAGE_ de _PAGES_",
                "infoEmpty": "No hay resultados disponibles",
                "infoFiltered": "(filtrado de _MAX_ elementos totales)",
                "decimal":        "",
                "emptyTable":     "No hay datos que mostrar",
                "infoPostFix":    "",
                "thousands":      ",",
                "loadingRecords": "Cargando...",
                "processing":     "Procesando...",
                "search":         "Buscar:",
                "paginate": {
                    "first":      "Primero",
                    "last":       "Último",
                    "next":       "Siguiente",
                    "previous":   "Anterior"
                },
                "aria": {
                    "sortAscending":  ": activar para ordenar la columna ascendente",
                    "sortDescending": ": activar para ordenar la columna descendente"
                }
            }

        } );

    }
 /*************************************************************/
//    INICIALIZACIÓN FULL CALENDAR 4.2.0
// /*******************************************/
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
        plugins: [ 'interaction', 'dayGrid', 'timeGrid' ],
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay'
        },
        locale: 'es',
        defaultDate: new Date(),
        navLinks: true, // can click day/week names to navigate views
        selectable: true,
        selectMirror: true,
        select: function(arg) {
            var title = prompt('Event Title:');
            if (title) {
                calendar.addEvent({
                    title: title,
                    start: arg.start,
                    end: arg.end,
                    allDay: arg.allDay
                })
            }
            calendar.unselect()
        },
        editable: true,
        eventLimit: true, // allow "more" link when too many events
        events: [
            {
                title: 'All Day Event',
                start: '2019-07-01'
            },
            {
                title: 'Long Event',
                start: '2019-06-07',
                end: '2019-07-10'
            },
            {
                groupId: 999,
                title: 'Repeating Event',
                start: '2019-07-09T16:00:00'
            },
            {
                groupId: 999,
                title: 'Repeating Event',
                start: '2019-07-16T16:00:00'
            },
            {
                title: 'Conference',
                start: '2019-07-11',
                end: '2019-07-13'
            },
            {
                title: 'Meeting',
                start: '2019-07-12T10:30:00',
                end: '2019-07-12T12:30:00'
            },
            {
                title: 'Title 1',
                start: '2019-07-12T12:00:00'
            },
            {
                title: 'Meeting',
                start: '2019-07-12T14:30:00'
            },
            {
                title: 'Title 2',
                start: '2019-07-12T17:30:00'
            },
            {
                title: 'Title 3',
                start: '2019-07-12T20:00:00'
            },
            {
                title: 'Title 4',
                start: '2019-07-13T07:00:00'
            },

        ]
    });

    //lo renderizo al abrir modal y lo destruyo al cerrarlo

    $('#agenda').on('shown.bs.modal', function () {
        calendar.render();
    });

    $('#agenda').on('hidden.bs.modal', function (e) {
        calendar.destroy();
    })





    /*************************************************************/
    //SIMULACIÓN DE animación  (FACTURACIÓN/ HISTÓRICO) cuando seleccionamos exportar todas las facturas a contaplus se ponen a checked todos las facturas para que lo hagas como prefieras
    /*************************************************************/
    $('#check-select-all-contaplus').change(function() {
        if($(this).is(":checked")) {
            $(".switch-document").attr( 'checked', 'checked' );
        }else{
            $(".switch-document").removeAttr( "checked" );
        }
    });


    /*************************************************************/
    //SIMULACIÓN ANIMACIÓN (FACTURACIÓN/PROVEEDORES/CREAR ) PARA QUE SE MUESTRE UN FORMULARIO U OTRO EN FUNCIÓN DEL TIPO DE GASTO A METER.
    /*************************************************************/
    if ( $("#select_tipo_gasto" ).length ) {

        $("#select_tipo_gasto").change(function () {


            if( $(this).val() === "gasto_transportista_option" ){
                $("#gasto_tipo_transportista_box").removeClass('animated fadeOut');
                $("#gasto_tipo_transportista_box").addClass('animated fadeIn');
                $("#gasto_tipo_otro_box").addClass('animated fadeOut');
                setTimeout(function(){
                    $("#gasto_tipo_transportista_box").removeClass('d-none');
                    $("#gasto_tipo_otro_box").addClass('d-none');
                }, 800);
            }
            if( $(this).val() === "gasto_otro_option" ){



                $("#gasto_tipo_otro_box").removeClass('animated fadeIn');

                $("#gasto_tipo_transportista_box").removeClass('animated fadeIn');
                $("#gasto_tipo_transportista_box").addClass('animated fadeOut');

                setTimeout(function(){

                    $("#gasto_tipo_otro_box").removeClass('d-none');
                    $("#gasto_tipo_transportista_box").addClass('d-none');
                }, 800);


            }
        });

    };

    /*************************************************************/
    //SIMULACIÓN ANIMACIÓN (FACTURACIÓN/CREAR ) PARA QUE SE MUESTRE UN FORMULARIO U OTRO EN FUNCIÓN DEL TIPO DE FACTURA A CREAR
    /*************************************************************/
    if ( $("#select_tipo_factura" ).length ) {

        $("#select_tipo_factura").change(function () {


            if( $(this).val() === "crear_abono_option" ){
                $("#box_crear_abono").removeClass('animated fadeOut');
                $("#box_crear_abono").addClass('animated fadeIn');

                $("#box_crear_proforma").removeClass('animated fadeIn');
                $("#box_crear_proforma").addClass('animated fadeOut');
                $("#box_crear_factura").removeClass('animated fadeIn');
                $("#box_crear_factura").addClass('animated fadeOut');

                setTimeout(function(){
                    $("#box_crear_abono").removeClass('d-none');
                    $("#box_crear_proforma").addClass('d-none');
                    $("#box_crear_factura").addClass('d-none');
                }, 800);
            }


            if( $(this).val() === "crear_proforma_option" ){

                $("#box_crear_proforma").removeClass('animated fadeOut');
                $("#box_crear_proforma").addClass('animated fadeIn');

                $("#box_crear_abono").removeClass('animated fadeIn');
                $("#box_crear_abono").addClass('animated fadeOut');
                $("#box_crear_factura").removeClass('animated fadeIn');
                $("#box_crear_factura").addClass('animated fadeOut');

                setTimeout(function(){

                    $("#box_crear_proforma").removeClass('d-none');
                    $("#box_crear_abono").addClass('d-none');
                    $("#box_crear_factura").addClass('d-none');
                }, 800);


            }

            if( $(this).val() === "crear_factura_option" ){

                $("#box_crear_factura").removeClass('animated fadeOut');
                $("#box_crear_factura").addClass('animated fadeIn');

                $("#box_crear_abono").removeClass('animated fadeIn');
                $("#box_crear_abono").addClass('animated fadeOut');
                $("#box_crear_proforma").removeClass('animated fadeIn');
                $("#box_crear_proforma").addClass('animated fadeOut');

                setTimeout(function(){

                    $("#box_crear_factura").removeClass('d-none');
                    $("#box_crear_abono").addClass('d-none');
                    $("#box_crear_proforma").addClass('d-none');
                }, 800);



            }
        });

    };

    /*************************************************************/
    //SIMULACIÓN ANIMACIÓN CAMPAÑAS/CREAR CAMPAÑA PARA QUE TE HAGAS UNA IDEA DEL FUNCIONAMIENTO QUE TIENES QUE SIMULAR
    /*************************************************************/

    //1. EN FUNCIÓN DEL SELECTOR DE TIPO DE CAMPAÑA: CLIENTE O TRANSPORTES SE MOSTRARÁ UNA U OTRA CAJA: BOX-CLIENTE O BOX-TRANSPORTES
    if ( $("#campana_tipo_oferta" ).length ) {

        $("#campana_tipo_oferta").change(function () {


            if( $(this).val() === "transportes" ){
                $("#box_transportes").removeClass('animated fadeOut');
                $("#box_transportes").addClass('animated fadeIn');

                $("#box_clientes").removeClass('animated fadeIn');
                $("#box_clientes").addClass('animated fadeOut');

                setTimeout(function(){
                    $("#box_transportes").removeClass('d-none');
                    $("#box_clientes").addClass('d-none');
                }, 300);
            }


            if( $(this).val() === "clientes" ){

                $("#box_clientes").removeClass('animated fadeOut');
                $("#box_clientes").addClass('animated fadeIn');

                $("#box_transportes").removeClass('animated fadeIn');
                $("#box_transportes").addClass('animated fadeOut');


                setTimeout(function(){

                    $("#box_clientes").removeClass('d-none');
                    $("#box_transportes").addClass('d-none');

                }, 300);


            }


        });

    };
    //2. EN FUNCIÓN DEL SELECTOR de territorio nacional o internacional se abrirá uno u otro...
    if ( $(".campana_territorio" ).length ) {
      $(".campana_territorio").change(function () {


        if( $(this).val() === "nacional" ){
            $("#box_nacional").removeClass('animated fadeOut');
            $("#box_nacional").addClass('animated fadeIn');

            $("#box_internacional").removeClass('animated fadeIn');
            $("#box_internacional").addClass('animated fadeOut');

            setTimeout(function(){
                $("#box_nacional").removeClass('d-none');
                $("#box_internacional").addClass('d-none');
            }, 300);
        }


        if( $(this).val() === "internacional" ){

            $("#box_internacional").removeClass('animated fadeOut');
            $("#box_internacional").addClass('animated fadeIn');

            $("#box_nacional").removeClass('animated fadeIn');
            $("#box_nacional").addClass('animated fadeOut');


            setTimeout(function(){

                $("#box_internacional").removeClass('d-none');
                $("#box_nacional").addClass('d-none');

            }, 300);


        }


    });
    };

    //3. al añadir una ruta  nacional aparece la tabla
    if ( $(".add_ruta_nacional" ).length ) {
        $(".add_ruta_nacional").click(function () {

                $("#box_tabla_rutas_nacional").removeClass('animated fadeOut');
                $("#box_tabla_rutas_nacional").addClass('animated fadeIn');

                 $("#box_tabla_rutas_internacional").removeClass('animated fadeIn');
                 $("#box_tabla_rutas_internacional").addClass('animated fadeOut');
                setTimeout(function(){
                    $("#box_tabla_rutas_nacional").removeClass('d-none');
                    $("#box_tabla_rutas_internacional").addClass('d-none');

                }, 300);


        });
    };
    //4. al añadir una ruta  internacional aparece la tabla
    if ( $(".add_ruta_internacional" ).length ) {
        $(".add_ruta_internacional").click(function () {

            $("#box_tabla_rutas_internacional").removeClass('animated fadeOut');
            $("#box_tabla_rutas_internacional").addClass('animated fadeIn');

            $("#box_tabla_rutas_nacional").removeClass('animated fadeIn');
            $("#box_tabla_rutas_nacional").addClass('animated fadeOut');
            setTimeout(function(){
                $("#box_tabla_rutas_internacional").removeClass('d-none');
                $("#box_tabla_rutas_nacional").addClass('d-none');

            }, 300);


        });
    };

});


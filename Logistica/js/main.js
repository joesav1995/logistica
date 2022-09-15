
//datatables

$(document).ready(function() {

    if ( $( ".datatable-transportauto" ).length ) {

        $('.datatable-transportauto').DataTable( {
            responsive: true,
        /*    dom: 'Bfrtip',

            buttons: [ {
                extend: 'excelHtml5',
                customize: function( xlsx ) {
                    var sheet = xlsx.xl.worksheets['sheet1.xml'];

                    $('row c[r^="C"]', sheet).attr( 's', '2' );
                }
            } ],*/

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

/*
    SIMULACIÓN DEL FUNCIONAMIENTO PARA QUE TE HAGAS UNA IDEA
*/

        //animación cuando seleccionamos exportar todas las facturas a excel se ponen a checked todos las facturas
        $('#check-select-all-excel').change(function() {
            if($(this).is(":checked")) {
                $(".switch-document").attr( 'checked', 'checked' );
            }else{
                $(".switch-document").removeAttr( "checked" );
            }
        });

    //animación cuando seleccionamos exportar todas las facturas a zip se ponen a checked todos las facturas
    $('#check-select-all-zip').change(function() {
        if($(this).is(":checked")) {
            $(".switch-document").attr( 'checked', 'checked' );
        }else{
            $(".switch-document").removeAttr( "checked" );
        }
    });

    //si pulsan exportar excel pero no hay ninguna factura seleccionada salta aviso

    $('#btn-export-excel').click(function() {
        var n =  $(" .switch-document:checked ").length;
        if(n==0){
        //    abrir aviso no se ha seleccionado nada
            $('#no_facturas_selected').modal('show');
            setTimeout(function(){
                $('#no_facturas_selected').modal('hide');
                }, 2000);

        }
    });

    $('#btn-export-zip').click(function() {
        var n =  $(" .switch-document:checked ").length;
        if(n==0){
            //    abrir aviso no se ha seleccionado nada
            $('#no_facturas_selected').modal('show');
            setTimeout(function(){
                $('#no_facturas_selected').modal('hide');
            }, 2000);
        }
    });

/*************************************************************/
//    INICIALIZACIÓN GRÁFICO DASHBOARD
// /*******************************************/

    if ( $( "#myChart" ).length ) {

        var ctx = document.getElementById('myChart').getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['En curso', 'Pendientes', 'Finalizados', 'Guardados'],
                datasets: [{
                    label: '#Transportes',
                    data: [1, 1, 1, 2],
                    backgroundColor: [
                        'rgba(136, 170, 0, 0.4)',
                        'rgba(255, 69, 0, 0.4)',
                        'rgba(200, 200, 200, 0.4)',

                        'rgba(59, 97, 170, 0.4)',


                    ],
                    borderColor: [
                        'rgba(136, 170, 0, 1)',
                        'rgba(255, 69, 0, 1)',
                        'rgba(200, 200, 200, 1)',

                        'rgba(59, 97, 170, 1)',


                    ],
                    borderWidth: 1
                }]
            },
            /*  options: {
                  scales: {
                      yAxes: [{
                          ticks: {
                              beginAtZero: true
                          }
                      }]
                  }
              }*/
        });

    }

} );




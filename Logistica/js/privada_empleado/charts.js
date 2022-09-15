
/*************************************************************/
//    INICIALIZACIÓN GRÁFICO DASHBOARD
// /*******************************************/

$(document).ready(function() {
    if ( $( "#myBarChart" ).length ) {
        new Chart(document.getElementById("myBarChart"),
            {
                "type": "bar", "data": {
                    "labels": ["Ene", "Feb", "Marz", "Abr", "May", "jun", "jul", "ago", "sep", "oct", "nov", "dic"],
                    "datasets": [
                        {
                            "label": "Pedidos 2018",
                            "data": [65, 59, 80, 81, 56, 55, 40, 120, 90, 130, 70, 55],
                            "fill": true,
                            "responsive": true,
                            "backgroundColor": [
                                /*  "rgba(255, 99, 132, 0.2)",
                                  "rgba(255, 159, 64, 0.2)",
                                  "rgba(255, 205, 86, 0.2)",
                                  "rgba(75, 192, 192, 0.2)",
                                  "rgba(54, 162, 235, 0.2)",
                                  "rgba(153, 102, 255, 0.2)",
                                  "rgba(201, 203, 207, 0.2)",
                                  "rgba(255, 159, 64, 0.2)",
                                  "rgba(255, 205, 86, 0.2)",
                                  "rgba(75, 192, 192, 0.2)",
                                  "rgba(54, 162, 235, 0.2)",
                                  "rgba(153, 102, 255, 0.2)"*/
                                "rgba(54, 162, 235, 0.2)",
                                "rgba(54, 162, 235, 0.2)",
                                "rgba(54, 162, 235, 0.2)",
                                "rgba(54, 162, 235, 0.2)",
                                "rgba(54, 162, 235, 0.2)",
                                "rgba(54, 162, 235, 0.2)",
                                "rgba(54, 162, 235, 0.2)",
                                "rgba(54, 162, 235, 0.2)",
                                "rgba(54, 162, 235, 0.2)",
                                "rgba(54, 162, 235, 0.2)",
                                "rgba(54, 162, 235, 0.2)",
                                "rgba(54, 162, 235, 0.2)"
                            ],
                            "borderColor": [
                                "rgb(54, 162, 235)",
                                "rgb(54, 162, 235)",
                                "rgb(54, 162, 235)",
                                "rgb(54, 162, 235)",
                                "rgb(54, 162, 235)",
                                "rgb(54, 162, 235)",
                                "rgb(54, 162, 235)",
                                "rgb(54, 162, 235)",
                                "rgb(54, 162, 235)",
                                "rgb(54, 162, 235)",
                                "rgb(54, 162, 235)",
                                "rgb(54, 162, 235)"
                            ],
                            "borderWidth": 1
                        }]
                },
                "options": {
                    "scales":
                        {
                            "yAxes": [
                                {
                                    "ticks": {"beginAtZero": true}
                                }
                            ]
                        }
                }
            });

        new Chart(document.getElementById("myBarChart2"),
            {
                "type": "bar", "data": {
                    "labels": ["Ene", "Feb", "Marz", "Abr", "May", "jun", "jul", "ago", "sep", "oct", "nov", "dic"],
                    "datasets": [
                        {
                            "label": "Pedidos 2019",
                            "data": [65, 59, 80, 81, 56, 55, 30, 0, 0, 0, 0, 0],
                            "fill": true,
                            "responsive": true,
                            "backgroundColor": [
                                /*   "rgba(255, 99, 132, 0.2)",
                                   "rgba(255, 159, 64, 0.2)",
                                   "rgba(255, 205, 86, 0.2)",
                                   "rgba(75, 192, 192, 0.2)",
                                   "rgba(54, 162, 235, 0.2)",
                                   "rgba(153, 102, 255, 0.2)",
                                   "rgba(201, 203, 207, 0.2)",
                                   "rgba(255, 159, 64, 0.2)",
                                   "rgba(255, 205, 86, 0.2)",
                                   "rgba(75, 192, 192, 0.2)",
                                   "rgba(54, 162, 235, 0.2)",
                                   "rgba(153, 102, 255, 0.2)"*/
                                "rgba(75, 192, 192, 0.2)",
                                "rgba(75, 192, 192, 0.2)",
                                "rgba(75, 192, 192, 0.2)",
                                "rgba(75, 192, 192, 0.2)",
                                "rgba(75, 192, 192, 0.2)",
                                "rgba(75, 192, 192, 0.2)",
                                "rgba(75, 192, 192, 0.2)",
                                "rgba(75, 192, 192, 0.2)",
                                "rgba(75, 192, 192, 0.2)",
                                "rgba(75, 192, 192, 0.2)",
                                "rgba(75, 192, 192, 0.2)",
                                "rgba(75, 192, 192, 0.2)",
                            ],
                            "borderColor": [
                                "rgb(75, 192, 192)",
                                "rgb(75, 192, 192)",
                                "rgb(75, 192, 192)",
                                "rgb(75, 192, 192)",
                                "rgb(75, 192, 192)",
                                "rgb(75, 192, 192)",
                                "rgb(75, 192, 192)",
                                "rgb(75, 192, 192)",
                                "rgb(75, 192, 192)",
                                "rgb(75, 192, 192)",
                                "rgb(75, 192, 192)",
                                "rgb(75, 192, 192)",
                            ],
                            "borderWidth": 1
                        }]
                },
                "options": {
                    "scales":
                        {
                            "yAxes": [
                                {
                                    "ticks": {"beginAtZero": true}
                                }
                            ]
                        }
                }
            });


    }


    });
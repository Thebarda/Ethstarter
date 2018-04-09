var max = 0;
var url = document.location.href;
var idCampagne = url.substring(url.lastIndexOf("/")+1);

var GetChartData = function () {
    $.ajax({
        url: "/stats/"+idCampagne,
        method: 'get',
        dataType: "json",
    }).done(function(data){
        barGraph(data[0]);
        doughnutGraph(data);
        lineGraph(data[1]);
    });
};

function barGraph(d) {
    var c = $('#bar-chart');
    var contributeurs = new Array();
    var montants = new Array();
    for(var i = 0; i < d.length; i++){
        contributeurs[i] = d[i].contributeur;
        montants[i] = Math.round(d[i].montant*100)/100;
    }
    new Chart(c, {
        type: 'bar',
        data: {
            labels: contributeurs,
            datasets: [
                {
                    label: "Donation (Ethereum)",
                    backgroundColor: ["#3e95cd", "#8e5ea2"],
                    data: montants
                }
            ]
        },
        options: {
            legend: { display: false },
            title: {
                display: true,
                text: 'Top 10 donateur'
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            }
        }
    });
}

function doughnutGraph(data) {
    var d = data[0];
    var but = data[2];
    var c = $('#doughnut-chart');
    var contributeurs = new Array();
    var montants = new Array();
    var total = 0;
    for(var i = 0; i < d.length; i++){
        contributeurs[i] = d[i].contributeur;
        montants[i] = Math.round(d[i].montant*100)/100;
        total += montants[i];
    }
    if(but.montantActuel < but.but){
        contributeurs[contributeurs.length] = "Reste";
        montants[montants.length] = but.but - but.montantActuel;
    }
    total = Math.round(total*100)/100;
    console.log(but.montantActuel + "  " + total);
    if ( total < but.montantActuel){
        contributeurs[contributeurs.length] = "Autres";
        montants[montants.length] = but.montantActuel - total;
    }
    new Chart(c, {
        type: 'doughnut',
        data: {
            labels: contributeurs,
            datasets: [
                {
                    label: "Population (millions)",
                    backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
                    data: montants
                }
            ]
        },
        options: {
            title: {
                display: true,
                text: 'Donations'
            }
        }
    });
}

function lineGraph(d) {
    var c = $('#line-chart');
    var dates = new Array();
    var montants = new Array();
    var max = 0;
    for(var i = 0; i < d.length; i++){
        dates[i] = d[i].date;
        montants[i] = Math.round(d[i].montant*100)/100;
        max =  montants[i];
    }
    new Chart(c, {
        type: 'line',
        data: {
            labels: dates,
            datasets: [{
                data: montants,
                label: "Evolution",
                borderColor: "#3e95cd",
                fill: false
            }
            ]
        },
        options: {
            title: {
                display: true,
                text: 'Evolution des donations (en Ethereum)'
            },
            elements: {
                line: {
                    tension: 0,
                }
            }
        }
    });
}

$(document).ready(function(){
    GetChartData();
});
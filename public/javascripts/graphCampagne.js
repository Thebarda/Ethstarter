var max = 0;
var steps = 10;
var chartData = {};
var url = document.location.href;
var idCampagne = url.substring(url.lastIndexOf("/")+1);

var GetChartData = function () {
    $.ajax({
        url: "/stats/"+idCampagne,
        method: 'get',
        dataType: "json",
    }).done(function(data){
        barGraph(data);
    });
};

function barGraph(d) {
    var c = $('#bar-chart');
    var contributeurs = new Array();
    var montant = new Array();
    for(var i = 0; i < d.length; i++){
        contributeurs[i] = d[i].contributeur;
        montant[i] = Math.round(d[i].montant*100)/100;
    };
    new Chart(c, {
        type: 'bar',
        data: {
            labels: contributeurs,
            datasets: [
                {
                    label: "Donation (Ethereum)",
                    backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
                    data: montant
                }
            ]
        },
        options: {
            legend: { display: false },
            title: {
                display: true,
                text: 'Top donateur'
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

$(document).ready(function(){
    GetChartData();
});
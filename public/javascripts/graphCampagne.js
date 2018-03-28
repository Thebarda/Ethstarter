$(document).ready(function(){
    function getChart(datas) {
        console.log(datas);
        json_encode(datas);
        console.log(datas);
        // Bar chart
        new Chart(document.getElementById("bar-chart"), {
            type: 'bar',
            data: {
                labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
                datasets: [
                    {
                        label: "Population (millions)",
                        backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
                        data: [2478,5267,734,784,433]
                    }
                ]
            },
            options: {
                legend: { display: false },
                title: {
                    display: true,
                    text: 'Predicted world population (millions) in 2050'
                }
            }
        });
    }

    $.ajax({
        url:"/campagnes",
        method:"post",
        data:{montant:$("#montantJS").val()}
    }).done(function(json){
        console.log("oui" + response);
        getChart(data);
    });
    /*$.get(campagnesModel.getDonateurs(), function(response) {
        if (!response.length) {
            console.log('une erreur est survenue');
            return false;
        }
        console.log("oui" + response);
        getChart(response);
    }, 'json');*/
});



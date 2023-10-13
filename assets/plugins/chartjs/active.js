(() => {
    const donutChartCtx = document.getElementById('barChart').getContext('2d');
    new Chart(donutChartCtx, {
        type: 'doughnut',
        data: {
        labels: ['Liquidity Pool', 'CEX Listing'],
        datasets: [{
            label: 'Sale',
            data: [90, 10,],
            borderWidth: 0,
            borderColor:'#0D0D14',
            backgroundColor: ['#0193FC', '#01E4FC'],
        }]
        },
        options: {
            responsive:true,
            maintainAspectRatio:true,
            aspectRatio: 1|1,
            cutout: '80%',
            scales: {
                display:false
            },
            plugins:{
                legend:{
                    display:false,
                    // position:'bottom',
                    // labels:{
                    //     generateLabels: (chart) => {
                    //         const datasets = chart.data.datasets;
                    //         return datasets[0].data.map((data, i) => ({
                    //             text: `${chart.data.labels[i]} ${data}%`,
                    //             fillStyle: datasets[0].backgroundColor[i],
                    //             strokeStyle: datasets[0].backgroundColor[i],
                    //             index: i,
                    //             fontColor:'#DADADA',
                    //         }))
                    //     },
                    //     boxWidth:10,
                    //     boxHeight:10,
                    //     usePointStyle:true,
                    //     padding:50,
                    //     borderRadius:100
                    // }
                },
                tooltip:{
                    enabled: true,
                    intersect:true,
                    displayColors:false,
                    position:'nearest',
                    
                }
            }
            
        }
    })
})()
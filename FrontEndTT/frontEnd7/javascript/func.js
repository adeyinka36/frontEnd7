const cancel= document.getElementsByClassName('cancel-alert')[0]
const alert=document.getElementsByClassName('alert')[0]
const daily=document.getElementById('daily');
const weekly=document.getElementById("weekly");
const hourly=document.getElementById('hourly');
const monthly=document.getElementById("monthly");
const periods= document.getElementsByClassName("periods");

for(let i=0;i<periods.length;i++){
    let theperiods= document.getElementsByClassName("periods");
    let currperr=theperiods[i];
    currperr.addEventListener("click",(e)=>{
        theperiods[0].style.backgroundColor="lightblue";
        theperiods[1].style.backgroundColor="lightblue";
        theperiods[2].style.backgroundColor="lightblue";
        theperiods[3].style.backgroundColor="lightblue";

        e.target.style.backgroundColor="darkblue"
       if(e.target.innerText==="Daily"){
        renderPeriod(dailyLabels,dailyData)
       }
       else if(e.target.innerText==="Hourly"){
        renderPeriod(hourlyLabels,hourlyData)
       }
       else if(e.target.innerText==="Monthly"){
        renderPeriod(monthlyLabels,monthlyData)
       }
       else{
        renderPeriod(weeklyLabels,weeklyData)
       }
    })
}



cancel.addEventListener('click',()=>{alert.style.display="none"

})

const weeklyLabels=["16-22","23-29","30-5","6-12","13-19","20-26","4-10","11-17","18-24","25-31"];
const weeklyData=[500,750,800,750,700,1000,900,1000,1500,1400,1600,2000];
const hourlyLabels=["0-3","3-04","04-12","12-16","16-20","20-23"];
const hourlyData=[500,1000,800,900,1500,2000];
const monthlyLabels=["jan","feb","march","april","may","june","july","aug","sept","oct","nov","dec"];
const monthlyData=[500,600,400,300,1500,7000,922,1100,1200,1100,1500,2500];
const dailyLabels=["mon","tue","web","thur","fri","sat","sun"];
const dailyData=[500,1000,800,900,1500,2000,2222,2500];

function renderPeriod(label,data){
    
    lineChart.data.labels=label;
    lineChart.data.datasets[0].data=data;
    lineChart.update()
}
window.onload=()=>{
    daily.click()
}



let myChart=document.getElementById("myChart").getContext("2d");

let lineChart=new Chart("myChart",{
    type:"line",
    data:{
     labels:["16-22","23-29","30-5","6-12","13-19","20-26","4-10","11-17","18-24","25-31"],
     datasets:[{
         data:[
             500,1000,800,900,1500,2000,2222,2500],
         borderJoinStyle:"miter",
         lineTension:0,
     }]
    },
    options:{
      title:{
          display:false,
      },
      legend:{
          display:false
      }
    }
})



// bar and dougnut charts
let myChartBar=document.getElementById("myChartBar").getContext("2d");

let barChart=new Chart("myChartBar",{
    type:"bar",
    data:{
     labels:["S","M","T","W","T","F","S"],
     datasets:[{
         data:[
            170,200,150,200,250,300,250],
         backgroundColor:"purple"

     }]
    },
    options:{
      title:{
          display:false,
      },
      legend:{
          display:false
      }
    }
})



let myChartPie=document.getElementById("myChartPie").getContext("2d");

let roundChart=new Chart("myChartPie",{
    type:"doughnut",
    data:{
     labels:["Phones","Tablets","Desktop"],
     datasets:[{
         
         data:[
             60,20,20],
        backgroundColor:["red","blue","green"]
     }],
    },
    options:{
      title:{
          display:false,
      },
      legend:{
          position:"right",
          display:true,
          labels:{
              boxWidth:30,
              fontSize:30
          }
          
      },
      
    }
})


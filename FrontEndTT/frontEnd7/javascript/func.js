const cancel= document.getElementsByClassName('cancel-alert')[0]
const alert=document.getElementsByClassName('alert')[0]
cancel.addEventListener('click',()=>{alert.style.display="none"

})



let myChart=document.getElementById("myChart").getContext("2d");

let lineChart=new Chart("myChart",{
    type:"line",
    data:{
     labels:["16-22","23-29","30-5","6-12","13-19","20-26","4-10","11-17","18-24","25-31"],
     datasets:[{
         data:[
             500,1000,800,900,1500,2000,2222,2500,],
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
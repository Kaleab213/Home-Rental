
fetch('http://localhost:3336/house').then(response => response.json()).then(data =>{ console.log(data[0].Home_Type)
let output=''
for(let value in data){
  // console.log(data[value].Home_Photo.Door)

  output +=`<div class="col-1">
  <div class="card h-100 shadow-sm">
    <img src=${ data[value].Home_Photo.Door} class="card-img-top"
      alt="Palm Springs Road" />
    <div class="card-body">
      <h5 class="card-title">${data[value].Home_Type}</h5>
      <p class="card-text">City: ${data[value].City}</p>
      <p class="card-text">Sub-city:${data[value].Sub_City}</p>
      <p class="card-text">Price:${data[value].Price}ETB</p>
      <button class="btn btn-primary">details</button>
  
      </p>
    </div>
  </div>
</div>
  
`

}
document.getElementById("cardinserted").innerHTML=output;

    
    })

fetch('http://localhost:3336/house').then(response => response.json()).then(data =>{ console.log(data[0].Home_Type)
let output=''
for(let value in data){
  // console.log(data[value].Home_Photo.Door)

  output +=`
  
  <div class="col">
  <div class="card h-100 shadow-sm"> <img src=${ data[value].Home_Photo.Door} class="card-img-top " style:"width:100%;" alt="..."> 
    <div class="label-top shadow-sm">See Photo</div> <div class="card-body"> 
      <div class="clearfix mb-3"> <span class="float-start badge rounded-pill bg-success">${data[value].Price}ETB;</span> <span class="float-end"><a href="#" class="small text-muted">Reviews</a></span> </div>
     <h5 class="card-title">
      <p>Home Type:${data[value].Home_Type}</p>
      
      <p>Location:${data[value].Sub_City}</p>
     
     </h5> <div class="text-center my-4"> <a href="#" class="btn btn-warning">See Details</a> </div> <div class="clearfix mb-1"> <span class="float-start"><i class="far fa-question-circle"></i></span> <span class="float-end"><i class="fas fa-plus"></i></span> </div> </div> </div> </div>
  
`

}
document.getElementById("cardinserted").innerHTML=output;

    
    })
import { Token } from "../API/Login.js";
import { house_id } from "./AdminFetch.js";
const con = document.getElementById("contain");
const approve = document.getElementById("approve");
const disapprove = document.getElementById("disapprove");
const main = document.getElementById("main");
console.log (house_id);



fetch(`http://localhost:3336/house/${house_id}/admin`,{
  method: 'GET',
  headers: {
      'content-Type': 'application/json',
      Authorization: 'Bearer ' + Token
  }
}).then((response)=>response.json()).then((data)=>{
  console.log(data);
  const html_segment =   ` <div>
  <div class="text-center mh-100" style="background-image: url(far.jpg)">
    <div >
    <h1 class="mt-5 mb-5">HOMES FOR APPROVAL</h1></div>
    <h6>HOME/PROPERTIES</h6>
  </div>
    <div class="container-fluid">
        <div class="row gy-5  justify-content-between">
          <h4 class="text-center col-md-12">Homes Available For Apporval</h4>
          
            <div class="col-md-5 ">
                <h5 class="text-center">Owner's contact information</h5><br><br>
                <h6 class="text-center">Address</h6> 
  
      
                  <div class="row mb-3 text-center"> 
                      <label for="colFormLabel" class="col-sm-2 col-form-label">Name:</label>
                      <div class="col-sm-10">
                        <p>${data.lesser.First_Name} ${data.lesser.Last_Name}</p>
                      </div>
                  </div>
                  <div class="row mb-3 text-center"> 
                    <label for="colFormLabel" class="col-sm-2 col-form-label">Phone Number:</label>
                    <div class="col-sm-10">
                      <div>${data.lesser.Phone_Number}</div>
                    </div>
                </div>
                  
                    <div class="row mb-3 text-center"> 
                      <label for="colFormLabel" class="col-sm-2 col-form-label">Email:</label>
                      <div class="col-sm-10">
                        <div>${data.lesser.Email}</div>
                      </div>
                  </div>
                  <div class="row mb-3 text-center">
                      <label for="colFormLabel" class="col-sm-2 col-form-label">Kebele:</label>
                      <div class="col-sm-10">
                        <div>${data.Kebele}</div>
                      </div>
                  </div>
                  <div class="row mb-3 text-center">
                      <label for="colFormLabel" class="col-sm-2 col-form-label">House Number:</label>
                      <div class="col-sm-10">
                        <div>${data.home_no}</div>
                      </div>
                  </div>
                  <div class="row mb-3 text-center">
                      <label for="colFormLabel" class="col-sm-2 col-form-label">Sub-city:</label>
                      <div class="col-sm-10">
                        <div>${data.Sub_City}</div>
                      </div>
                  </div>
                  <div class="row mb-3 text-center">
                    <label for="colFormLabel" class="col-sm-2 col-form-label">Woreda:</label>
                    <div class="col-sm-10">
                      <div>${data.Wereda}</div>
                    </div>
                </div>
                <div class="text-center">
              </div>
                
  
            </div>
         
            <div class=" col-md-5  my-6 ">
                <h5 class="text-center">Home legal information</h5><br><br>
                <h6 class="text-center">Kebele support papper</h6>
                <div class="card-body text-center">
                    <img src="${data.Home_Photo.Home_license}" alt="pic2" class="img-fluid" >
                </div>
            </div>
        </div>
  
        <div class="text-center"><h3>Photos and Videos</h3></div>
        <div class="row  my-5 justify-content-between ">
            <div class="card mb-4 col-md-4 p-0 ">
                <img src="${data.Home_Photo.Door}" alt="pic">
                <p>Door Photo</p>
            </div>
            <div class="card mb-4 col-md-4 p-0">
                <img src="${data.Home_Photo.Floor}" alt="pic">
                <p>
                Floor Photo</p>
            </div>
            <div class="card mb-4  col-md-4 p-0 text-center">
                <img src="${data.Home_Photo.Wall}" alt="pic">
                <p>Wall Photo</p>
              
        </div>
        <div class="card mb-4 mb-4 col-md-4 p-0">
                <img src="${data.Home_Photo.Shower}" alt="pic">
                <p>Shower Photo</p>
                
        </div>
        <div class="card mb-4 mb-4 col-md-4 p-0">
                <img src="${data.Home_Photo.Kitchen}" alt="pic">
                <p>Kitchen Photo</p>
                
        </div>
        <div class="card mb-4 mb-4 col-md-4 p-0">
                <img src="${data.Home_Photo.Roof}" alt="pic">
                <p>Roof Photo</p>
        </div>
        </div>`



con.innerHTML =  html_segment


  
})

approve.addEventListener('click', function (evt) { 
  evt.preventDefault(),
  fetch(`http://localhost:3336/house/${house_id}/admin`,{
  method: 'PATCH',
  headers: {
      'content-Type': 'application/json',
      Authorization: 'Bearer ' + Token
  },
  body:JSON.stringify ({
    
    Approval_status : true
  })
}).then((response)=>response.json()).then((data)=>{
  console.log(data);
  main.innerHTML = "You approved the Home successfully !!!!!"
  async function func() {
      await sleep(5000);
  }
  func()
  window.location.href = './Admin.html';
 
});
});

disapprove.addEventListener('click', function (evt) { 
  evt.preventDefault(),
  fetch(`http://localhost:3336/house/${house_id}/admin`,{
  method: 'PATCH',
  headers: {
      'content-Type': 'application/json',
      Authorization: 'Bearer ' + Token
  },
  body:JSON.stringify ({
    
    Approval_status : null
  })
}).then((response)=>response.json()).then((data)=>{
  console.log(data);
  main.innerHTML = "You Disapproved the Home successfully !!!!!"
 });
});






















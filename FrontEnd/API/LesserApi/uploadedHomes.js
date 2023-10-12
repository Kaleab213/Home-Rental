const previousDiv = document.getElementById('previousUploads');

const leessorId = localStorage.getItem('userId');
export const homeDetailsId = localStorage.getItem('homeDetailId');
const Token = localStorage.getItem('access_token');

let aprroval_status = '';

let report =  '';
let deal =  '';
fetch(`http://localhost:3336/house/lesser/${leessorId}`,{
        method: 'GET',
        headers: {
            'content-Type': 'application/json',
            Authorization: 'Bearer ' +Token
            }
    }).then(response =>response.json()).then(async data=>{
        // localStorage.setItem("access_token", data.tokens.access_token);
        // console.log(data.tokens.role,"with token token");
        console.log(data);
        if(data.statusCode === 401 || data.statusCode === 403){
          window.location.href = "./lessorLogin.html";
        }

        if(data.length === 0 ){
          const item = document.createElement('div');
          item.classList.add('text-center');
          item.innerHTML += "No previous uploads";
          previousDiv.appendChild(item);
        }
        data.forEach(home=> {
            if (home.report >= 3){
              report = "Reports are exceeding 3"
            }
            deal = `Number of deals: ${home.deal}`
            if (home.Approval_status == true){
                aprroval_status = "Approved";
            }
            else if (home.Approval_status == false){
                aprroval_status = 'Pending';
            }
            else{
                aprroval_status = 'Rejected'
            }
            const item = document.createElement('div');
            item.classList.add('col-lg-4');
            item.classList.add("col-md-6");
            item.classList.add("mb-4")
            item.innerHTML = `<div class= "card shadow border-0">
            <div class="bg-image hover-zoom ripple ripple-surface ripple-surface-light"
            data-mdb-ripple-color="light">
            <img src="${home.Home_Photo.Door}" class="card-img-top img-fluid embed-responsive-item img-btn"
              class="w-100" style="height:35vh" id="${home.id}"/>
            <a href="#!">
              <div class="hover-overlay">
                <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
              </div>
            </a>
          </div>
          <div class="card-body">
            <a href="" class="text-reset">
              <h5 class="card-title mb-3">${home.Sub_City}</h5>
            </a>
            <a href="" class="text-reset">
              <p>${home.id}</p>
            </a>
            <h6 class="mb-3" style="color:#4A60A1">${home.Price} birr</h6>
            <div class="specification">
              <i class="fa-thin fa-bed-front"></i>
              <span class="bedroom"5></span>
              <i class="fa-thin fa-bath"></i>
              <span class="bathrooms">4</span>
              <i class="fa-thin fa-maximize"></i>
              <span class="area-size">${home.Size} ft</span><br>
              <span class="area-size">Approval Status: ${aprroval_status}</span><br>
              <span id="report" class="text-danger" style="font-size:20px">${report}</span><br>
              <span id ="deal">${deal}</span>
            </div>
          </div>
        </div>
        </div>`
          previousDiv.appendChild(item);
        })
        const img_buttons = document.getElementsByClassName('img-btn');
        for(let img of img_buttons) {
          img.addEventListener('click',function(){
            localStorage.setItem("homeDetailsId",img.id);
            window.location.href = './homeDetailsLessor.html'
          })
        }
})


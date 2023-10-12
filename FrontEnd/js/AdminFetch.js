import { Token } from "../API/Login.js";
export const house_id = localStorage.getItem('house_id');
let container = document.getElementById('requests');


// fetch('http://localhost:3336/house/admin',{
//     method: 'GET',
//     headers:{

//     }
// })


async function getRequests() {
    let url = 'http://localhost:3336/house/admin';
    // let url='https://fakestoreapi.com/products';
    try {
        let res = await fetch(url,{
            method: 'GET',
            headers: {
                'content-Type': 'application/json',
                Authorization: 'Bearer ' +Token
            }
        });
        if (res.status != 200){
            window.location.href = './login.html';
        }
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

async function renderRequests() {
    let Num = 0;
    let Requests = await getRequests();
    console.log(Requests)
    
    let html = document.createElement("div");
    html.classList.add("border")
    
   
   
    
    for (let da of Requests){
        console.log(da.Home_Photo.Door)
        console.log(da.id)

        Num += 1;
       

        let div = document.createElement("div")
        div.classList.add("col-sm-12");
        div.classList.add("mb-3")
        div.classList.add("each")

        let num = document.createElement("h4")
        num.classList.add("col-sm-1");
        num.classList.add("me-0");
        num.innerText = Num;
        div.append(num)

        let img = document.createElement("img")
        img.classList.add("col-sm-5")
        img.classList.add("im")
        img.src = da.Home_Photo.Door
        div.appendChild(img)

        let name = document.createElement("h6")
        console.log(da.lesser)
        name.innerText = da.lesser.First_Name
        name.classList.add("col-sm-5")
        name.classList.add("pe-5")
        name.classList.add("text-center")
        div.appendChild(name)

         
   
        
        let id = da.id;
        let button = document.createElement("button")
        button.onclick = (function(id) {
            return function() {
            DetailSee(id)
            } 
        })(id);
        button.classList.add("btn")
        button.classList.add("btn-secondary")
        button.classList.add("DetailButton")
        button.classList.add("col-sm-3")
        button.innerHTML = "Detail"
        button.id = da.id;
        div.appendChild(button)
        // addListener() 
        // button.addEventListener("click", addl (function (id) {
        //     return function () {
            
        //     DetailSee(id)
        // }})(id), false);
        
        
        html.append(div);
        // html.append(button)
        
    };
    
    container.append(html)
    // buttons = document.getElementsByName('button')

    // buttons.forEach(da=>{ 
    // id = da.id;
    // da.addEventListener('click', (function (id) {
    //     return function () { 
    //         DetailSee(id)

    // }}))
// });
 
    
    
}
function DetailSee(id){

    // fetch(`http://localhost:3336/house/${id}/admin`,{
    //     method: 'GET',
    //     headers: {
    //         'content-Type': 'application/json',
    //         Authorization: 'Bearer ' +Token
    //     }
    // }).then(response => response.json).then(data=> {
    //     console.log(data);
    // });
    console.log(id);
    localStorage.setItem("house_id", id)
    console.log(parseInt(localStorage.getItem("house_id")));
    window.open("HouseAdminDetail.html")
}




renderRequests();






// const DetailSee = function (id){

//     // fetch(`http://localhost:3336/house/${id}/admin`,{
//     //     method: 'GET',
//     //     headers: {
//     //         'content-Type': 'application/json',
//     //         Authorization: 'Bearer ' +Token
//     //     }
//     // }).then(response => response.json).then(data=> {
//     //     console.log(data);
//     // });
//     localStorage.setItem("house_id", id)
//     window.open("adminDetail.html")
// }
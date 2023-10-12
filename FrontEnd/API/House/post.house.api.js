import { Token } from "../Login";

const form = document.getElementById('form');

console.log("submitteed")

if (form) {
    form.addEventListener('submit',function(e){
    console.log("submit")
const houseType= document.getElementById('housetype').value;
const approval= document.getElementById('approval').value;
const size= document.getElementById('size').value;

const price= document.getElementById('price').value;
const city = document.getElementById('city').value;
const sub = document.getElementById('sub-city').value;
const wereda = document.getElementById('wereda').value;
const kebele = document.getElementById('kebele').value;
const houseNo = document.getElementById('house-no').value;



fetch('http://localhost:3336/house',{
    method: 'POST',
    body:JSON.stringify({
   
        Home_Type:houseType,
   
        Approval_status:approval,
         Size:size,
        Price:price,
        
        City:city,
        Sub_City:sub,
        Wereda:wereda,
        Kebele:kebele,
        home_no:houseNo,
    }),
    headers:{
        "Content-Type": "application/json",
        Authorization: 'Bearer ' + Token,
    }
}).then(function (response) {
    return response.json()}).then(function(data) {
        console.log(data);
        // window.open('courseMaterialsboot.html')
        window.location.href = 'index.html';
        
       
    
    })

}) };


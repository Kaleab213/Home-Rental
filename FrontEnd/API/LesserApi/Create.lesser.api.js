

const form = document.getElementById('lesser_form');
const confirm= document.getElementById('confirm');
if(form){

form.addEventListener('submit',function(e){
    e.preventDefault();
const fname= document.getElementById('fname').value;
const lname= document.getElementById('lname').value;
const email= document.getElementById('email').value;
const phone= document.getElementById('phone').value;
const phone2= document.getElementById('phone2').value;
const region= document.getElementById('region').value;
const zone= document.getElementById('zone').value;
const username= document.getElementById('username').value;
const password= document.getElementById('password').value;



const wereda= document.getElementById('wereda').value;
const city= document.getElementById('city').value;




fetch('http://localhost:3336/user/lesser/signup',{



    method: 'POST',
    body:JSON.stringify({


    First_Name:fname,

   
    Last_Name:lname,

    User_Name:username,
    Password:password,
    Phone_Number:phone,
    Phone_Number2:phone2,

   
    Email:email,

  
    Region:region,

    Zone:zone,

  
    Wereda:wereda,

  
    City:city
    
    

    }),
    headers:{
        "Content-Type": "application/json",
        
    }
}).then(function (response) {
    return response.json()}).then(function(data) {
        console.log(data);
        localStorage.setItem("access_token", data.access_token)
        window.open('Login.html')
    
    })

})}

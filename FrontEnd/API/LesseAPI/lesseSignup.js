

const form = document.getElementById('lesser_form');
const confirm= document.getElementById('confirm');
if(form){

form.addEventListener('submit',function(e){
    e.preventDefault();
const fname= document.getElementById('fname').value;
const lname= document.getElementById('lname').value;
const email= document.getElementById('email').value;
const phone= document.getElementById('phone').value;

const username= document.getElementById('username').value;
const password= document.getElementById('password').value;




fetch('http://localhost:3336/user/lesse/signup',{



    method: 'POST',
    body:JSON.stringify({


    First_Name:fname,

   
    Last_Name:lname,

    User_Name:username,
    Password:password,
    Phone_Number:phone,
    

   
    Email:email,

  
    
    

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

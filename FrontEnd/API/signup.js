const form = document.getElementById('contact_form');
const confirm= document.getElementById('confirm');
if(form){

form.addEventListener('submit',function(e){
    e.preventDefault();




const username= document.getElementById('username').value;
const password= document.getElementById('password').value;




fetch('http://localhost:3336/user/signup',{
    method: 'POST',
    body:JSON.stringify({
    
   
    User_Name:username,
  
    Password:password,
   

    

    }),
    headers:{
        "Content-Type": "application/json",
    }
}).then(function (response) {
    return response.json()}).then(function(data) {
        console.log(data);
        window.open('signup.html')
    
    })

})}

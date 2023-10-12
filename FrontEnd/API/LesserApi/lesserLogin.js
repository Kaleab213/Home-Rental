const login =document.getElementById('loginform');
export const Token = localStorage.getItem('access_token');
export const userId = localStorage.getItem('userId');
const errorMessage = document.getElementById('error')
if(login){
login.addEventListener('submit', function(e){e.preventDefault()
    const username= document.getElementById('username').value;
    const password= document.getElementById('password').value;
    fetch('http://localhost:3336/user/signin',{
        method: 'POST',
        body:JSON.stringify({
        User_Name: username,
        Password: password,
       
        }),
        headers:{
            "Content-Type": "application/json",
        }
    }).then(response =>response.json()).then(data=>{
        console.log(localStorage);
        localStorage.setItem("access_token", data.Tokens.access_token);
        console.log(localStorage);
        // console.log(data.role);
        console.log(data)
if(data.Tokens.role==="LESSER"){
    localStorage.setItem("userId", data.user.lesser.id);
    console.log(userId)
    window.location.href = 'LessorUploads.html';
  }
  else {
    errorMessage.style.color  = 'red';
    errorMessage.innerHTML = "User not found";
  }
if(data.error ){ alert("username and password incorrect")}

    })

})};

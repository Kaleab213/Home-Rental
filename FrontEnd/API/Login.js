const login =document.getElementById('loginform');
export const Token = localStorage.getItem('access_token');
export const userId = localStorage.getItem('userId');
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
        localStorage.setItem("access_token", data.Tokens.access_token);
        console.log(localStorage);
        // console.log(data.role);
        console.log(data)
if(data.Tokens.role==="ADMIN"){window.open('Admin.html')}
if(data.Tokens.role==="LESSER"){
    localStorage.setItem("userId", data.user.lesser.id);
    console.log(userId)
    window.location.href  = 'housePosts.html'
    ;}
if(data.Tokens.role==="LESSE")
{
    localStorage.setItem("userId", data.user.lesse.id);
    console.log(userId);
    window.location.href = 'HomeDetail.html'
    ;}
if(data.error ){ alert("username and password incorrect")}


    })
    .catch(error => console.error("Error: " + data.message));










})};
